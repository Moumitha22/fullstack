package com.educonnect.moumitha.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.UserRegisterRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.UserFetchResponse;
import com.educonnect.moumitha.model.User;
import com.educonnect.moumitha.repository.UserRepository;
import com.educonnect.moumitha.service.UserService;
import com.educonnect.moumitha.utils.UserNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public MessageResponse register(UserRegisterRequest request){
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        
        if(isUser.isPresent()){
            return MessageResponse.builder().message("User already exists with email "+request.getEmail()).build();
        }
        var user = User.builder().name(request.getName()).
                                  email(request.getEmail()).
                                  password(request.getPassword()).
                                  mobile(request.getMobile()).
                                  role(request.getRole()).
                                  build();
        userRepository.save(user);
        return MessageResponse.builder().message("User registered successfully").build();   
    }

    @Override
    public List<UserFetchResponse> getAll(){
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> UserFetchResponse.builder().name(user.getName()).email(user.getEmail()).password(user.getPassword()).mobile(user.getMobile()).role(user.getRole()).build())
                .collect(Collectors.toList());
        // return users.map(user -> UserResponse.builder().name(user.getName()).email(user.getEmail()).build());
    }

    @Override
    public UserFetchResponse getById(String id) throws UserNotFoundException{
        Optional<User> isUser = userRepository.findById(id);
        
        if(isUser.isEmpty()){
            throw new UserNotFoundException("User not found with id "+id);
        }
        return UserFetchResponse.builder().name(isUser.get().getName()).email(isUser.get().getEmail()).password(isUser.get().getPassword()).mobile(isUser.get().getMobile()).role(isUser.get().getRole()).build();
    }

    @Override
    public MessageResponse deleteByEmail(String email){
        Optional<User> isUser = userRepository.findByEmail(email);
        
        if(isUser.isEmpty()){
            return MessageResponse.builder().message("User not found with email "+email).build();
        }
        userRepository.delete(isUser.get());
        return MessageResponse.builder().message("User deleted successfully").build();   
    }

    @Override
    public MessageResponse updateMobileNumber(String email,String mobile){
        Optional<User> isUser = userRepository.findByEmail(email);
        
        if(isUser.isEmpty()){
            return MessageResponse.builder().message("User not found with email "+email).build();
        }
        var user = User.builder().name(isUser.get().getName()).email(isUser.get().getEmail()).password(isUser.get().getPassword()).mobile(mobile).role(isUser.get().getRole()).build();
        userRepository.save(user);
        return MessageResponse.builder().message("User deleted successfully").build();   
    }
}

