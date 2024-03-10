package com.educonnect.moumitha.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.ForgotPasswordRequest;
import com.educonnect.moumitha.dto.request.LoginRequest;
import com.educonnect.moumitha.dto.request.RegisterRequest;
import com.educonnect.moumitha.dto.response.LoginResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.enumerated.Role;
import com.educonnect.moumitha.model.Institute;
import com.educonnect.moumitha.model.Student;
import com.educonnect.moumitha.model.Token;
import com.educonnect.moumitha.model.User;
import com.educonnect.moumitha.repository.TokenRepository;
import com.educonnect.moumitha.repository.UserRepository;
import com.educonnect.moumitha.service.AuthenticationService;
import com.educonnect.moumitha.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@SuppressWarnings("null")
@RequiredArgsConstructor
public class AuthenticationServiceImplementation implements AuthenticationService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;


    @Override
    public MessageResponse register(RegisterRequest request) {
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());

        if(isUser.isPresent()) {
            return MessageResponse.builder()
                                    .message("User already exists with email " + request.getEmail())
                                    .build();
        }

        Object user = null;

        if(request.getRole().equals("STUDENT")) {
            var details = Student.builder().email(request.getEmail()).build();
            user = User.builder()
                            .name(request.getName())
                            .email(request.getEmail())
                            .password(passwordEncoder.encode(request.getPassword()))
                            .role(Role.valueOf(request.getRole()))
                            .mobile(request.getMobile())
                            .student((Student)details)
                            .build();
        }
        else if(request.getRole().equals("INSTITUTE")) {
            var details = Institute.builder()
                            .instituteName(request.getName())
                            .email(request.getEmail())
                            .mobile(request.getMobile())
                            .build();
            user = User.builder()
                            .name(request.getName())
                            .email(request.getEmail())
                            .password(passwordEncoder.encode(request.getPassword()))
                            .role(Role.valueOf(request.getRole()))
                            .mobile(request.getMobile())
                            .institute((Institute)details)
                            .build();
        }
        else {
            user = User.builder()
                            .name(request.getName())
                            .email(request.getEmail())
                            .password(passwordEncoder.encode(request.getPassword()))
                            .role(Role.valueOf(request.getRole()))
                            .mobile(request.getMobile())
                            .build();
        }

        userRepository.save((User)user);

        return MessageResponse.builder()
                                .message("User registered successfully")
                                .build();
    }


    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        var user = userRepository.findByEmail(request.getEmail())
        .orElseThrow(() -> new UsernameNotFoundException("User not found with mail "+request.getEmail()));


        Map<String,Object> claims = new HashMap<>();
        claims.put("role",user.getRole().toString());
        var accessToken = jwtUtil.generateToken(claims,user);

        revokeAllUserTokens(user);
        saveUserToken(accessToken,user);
        
        return LoginResponse.builder()
                .message("User logged in successfully.")
                .accessToken(accessToken)
                .build();  
        
    }

    private void saveUserToken(String accessToken, User user) {
        var token = Token.builder()
                .token(accessToken)
                .user(user)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_IdAndExpiredIsFalseAndRevokedIsFalse(user.getId());
        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public MessageResponse forgotPassword(ForgotPasswordRequest request) {
        var user = userRepository.findByEmail(request.getEmail())
        .orElseThrow(() -> new UsernameNotFoundException("User not found with email "+request.getEmail()));

        if(!passwordEncoder.matches(request.getCurrentPassword(),user.getPassword())){
            return MessageResponse.builder().message("Password incorrect").build();
        }

        if(!request.getNewPassword().equals(request.getConfirmPassword())){
            return MessageResponse.builder().message("Password mismatch").build();
        }
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
        return MessageResponse.builder().message("Password updated successfully").build();   
    }       

}
