package com.educonnect.moumitha.service;

import java.util.List;

import com.educonnect.moumitha.dto.request.RegisterRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.UserFetchResponse;
import com.educonnect.moumitha.utils.UserNotFoundException;

public interface UserService {
    MessageResponse register(RegisterRequest request);

    List<UserFetchResponse> getAll();

    UserFetchResponse getById(String id) throws UserNotFoundException;

    MessageResponse deleteByEmail(String email);

    MessageResponse updateMobileNumber(String email, String mobile);
}
