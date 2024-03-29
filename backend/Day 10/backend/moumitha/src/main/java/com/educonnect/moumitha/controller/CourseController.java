package com.educonnect.moumitha.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.moumitha.dto.request.CourseRequest;
import com.educonnect.moumitha.dto.response.CourseResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.service.CourseService;
import com.educonnect.moumitha.utils.MyConstant;


import static com.educonnect.moumitha.utils.Access.COURSE_READ;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.COURSE)
@RequiredArgsConstructor
public class CourseController {
    
    private final CourseService courseService;
    
    @PostMapping(MyConstant.ADD)
    public ResponseEntity<?> addCourse(@RequestBody CourseRequest request){
        MessageResponse response = new MessageResponse();
        try{
            response = courseService.addCourse(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET)
    @PreAuthorize(COURSE_READ)
    public ResponseEntity<?> getAll() {
        try{
            courseService.getAll();
            return new ResponseEntity<>(courseService.getAll(), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET+"/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        CourseResponse response = new CourseResponse();
        try{
            response = courseService.getByInstitute(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(NotFoundException e){
            var responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(MyConstant.DELETE + "/{email}")
    public ResponseEntity<?> deleteByEmail(@PathVariable String id) {
        MessageResponse response = new MessageResponse();
        try{
            response = courseService.deleteById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        } 
    }

    // @PatchMapping(MyConstant.UPDATE+ "/{email}/{mobile}")
    // public ResponseEntity<?> updateMobileNumber(@PathVariable String email,@PathVariable String mobile) {
    //     MessageResponse response = new MessageResponse();
    //     try{
    //         response = courseService.updateMobileNumber(email,mobile);
    //         return new ResponseEntity<>(response, HttpStatus.OK);
    //     }
    //     catch(Exception e){
    //         return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    //     } 
    // }
}
