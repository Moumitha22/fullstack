package com.educonnect.moumitha.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.moumitha.dto.request.UserRegisterRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.UserFetchResponse;
import com.educonnect.moumitha.service.UserService;
import com.educonnect.moumitha.utils.MyConstant;
import com.educonnect.moumitha.utils.UserNotFoundException;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequiredArgsConstructor
@RequestMapping(MyConstant.USER)
public class UserController {

    private final UserService userService;
    
    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> register(@RequestBody UserRegisterRequest request){
        MessageResponse response = new MessageResponse();
        try{
            response = userService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET)
    public ResponseEntity<?> getAll() {
        try{
            userService.getAll();
            return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET+"/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        UserFetchResponse response = new UserFetchResponse();
        try{
            response = userService.getById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(UserNotFoundException e){
            var responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(MyConstant.DELETE + "/{email}")
    public ResponseEntity<?> deleteByEmail(@PathVariable String email) {
        MessageResponse response = new MessageResponse();
        try{
            response = userService.deleteByEmail(email);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        } 
    }

    @PatchMapping(MyConstant.UPDATE+ "/{email}/{mobile}")
    public ResponseEntity<?> updateMobileNumber(@PathVariable String email,@PathVariable String mobile) {
        MessageResponse response = new MessageResponse();
        try{
            response = userService.updateMobileNumber(email,mobile);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        } 
    }

}
