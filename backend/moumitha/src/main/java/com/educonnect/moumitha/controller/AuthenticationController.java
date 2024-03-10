package com.educonnect.moumitha.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educonnect.moumitha.dto.request.ForgotPasswordRequest;
import com.educonnect.moumitha.dto.request.LoginRequest;
import com.educonnect.moumitha.dto.request.RegisterRequest;
import com.educonnect.moumitha.dto.response.LoginResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.service.AuthenticationService;
import com.educonnect.moumitha.utils.MyConstant;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.AUTH)
@RequiredArgsConstructor
@Tag(name="Authentication",description = "User can register , login ,change password here")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    
    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        System.out.println(request.getEmail());
        MessageResponse response = new MessageResponse();
        try{
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    
    @PostMapping(MyConstant.LOGIN)
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try{
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }  

    @PatchMapping(MyConstant.FORGOT_PASSWORD)
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request){
        MessageResponse response = new MessageResponse();
        try{
            response = authenticationService.forgotPassword(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }  
}
