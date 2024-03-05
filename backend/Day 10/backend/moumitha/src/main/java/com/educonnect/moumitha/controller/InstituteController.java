package com.educonnect.moumitha.controller;

import static com.educonnect.moumitha.utils.Access.INSTITUTE_DELETE;
import static com.educonnect.moumitha.utils.Access.INSTITUTE_READ;
// import static com.educonnect.moumitha.utils.Access.INSTITUTE_UPDATE;
import static com.educonnect.moumitha.utils.MyConstant.DELETE;
import static com.educonnect.moumitha.utils.MyConstant.GET;
// import static com.educonnect.moumitha.utils.MyConstant.UPDATE_DETAILS;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.service.InstituteService;
import com.educonnect.moumitha.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.INSTITUTE)
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ADMIN', 'STUDENT', 'INSTITUTE')")
public class InstituteController {

    private final InstituteService instituteService;
    
    @GetMapping(GET)
    @PreAuthorize(INSTITUTE_READ)
    public ResponseEntity<?> getAllUsers() {
        
        try {
            var response = instituteService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
            
        }
    }
    
    @GetMapping(GET + "/{email}")
    @PreAuthorize(INSTITUTE_READ)
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        
        try {
            var response = instituteService.getByEmail(email);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(DELETE + "/{id}")
    @PreAuthorize(INSTITUTE_DELETE)
    public ResponseEntity<?> deleteUserByID(@PathVariable String id) {
        
        try {
            var response = instituteService.deleteById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    // @PatchMapping(UPDATE_DETAILS)
    // @PreAuthorize(INSTITUTE_UPDATE)
    // public ResponseEntity<?> updateDetails(@PathVariable String id) {
        
    //     try {
    //         var response = instituteService.updateDetails(id);
    //         return new ResponseEntity<>(response, HttpStatus.OK);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
    //     }
    // }
}