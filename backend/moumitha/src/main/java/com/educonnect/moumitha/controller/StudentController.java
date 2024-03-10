package com.educonnect.moumitha.controller;

import static com.educonnect.moumitha.utils.Access.STUDENT_DELETE;
import static com.educonnect.moumitha.utils.Access.STUDENT_READ;
import static com.educonnect.moumitha.utils.Access.STUDENT_UPDATE;
import static com.educonnect.moumitha.utils.MyConstant.DELETE;
import static com.educonnect.moumitha.utils.MyConstant.GET;
import static com.educonnect.moumitha.utils.MyConstant.UPDATE;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.moumitha.dto.request.UpdateStudentRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.service.StudentService;
import com.educonnect.moumitha.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.STUDENT)
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ADMIN', 'STUDENT', 'INSTITUTE')")
public class StudentController {

    private final StudentService studentService;
    
    @GetMapping(GET)
    @PreAuthorize(STUDENT_READ)
    public ResponseEntity<?> getAllUsers() {
        
        try {
            var response = studentService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
            // var responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            // return new ResponseEntity<>(responseMessage, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    @GetMapping(GET + "/{email}")
    @PreAuthorize(STUDENT_READ)
    public ResponseEntity<?> getUserByID(@PathVariable String email) {        
        try {
            var response = studentService.getByEmail(email);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }  catch (NotFoundException e) {
            return new ResponseEntity<>(new MessageResponse(e.getMessage()), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(DELETE + "/{email}")
    @PreAuthorize(STUDENT_DELETE)
    public ResponseEntity<?> deleteUserByEmail(@PathVariable String email) {
        
        try {
            var response = studentService.deleteByEmail(email);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping(UPDATE)
    @PreAuthorize(STUDENT_UPDATE)
    public ResponseEntity<?> updateStudentByEmail(@RequestBody UpdateStudentRequest request) {        
        try {
            var response = studentService.updateDetails(request, request.getEmail());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }
}