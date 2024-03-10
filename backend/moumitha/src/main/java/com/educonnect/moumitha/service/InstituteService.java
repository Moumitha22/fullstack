package com.educonnect.moumitha.service;

import java.util.List;

import com.educonnect.moumitha.dto.request.UpdateInstituteRequest;
import com.educonnect.moumitha.dto.response.InstituteResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;

public interface InstituteService {
    
    List<InstituteResponse> getAll();

    InstituteResponse getByEmail(String email) throws NotFoundException;

    MessageResponse deleteById(String id);

    MessageResponse updateDetails(String email, UpdateInstituteRequest request);
}