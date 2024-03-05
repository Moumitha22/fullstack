package com.educonnect.moumitha.service;


import com.educonnect.moumitha.dto.request.ForgotPasswordRequest;
import com.educonnect.moumitha.dto.request.LoginRequest;
import com.educonnect.moumitha.dto.request.RegisterRequest;
import com.educonnect.moumitha.dto.response.LoginResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;

public interface AuthenticationService {

    MessageResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    MessageResponse forgotPassword(ForgotPasswordRequest request);
}
