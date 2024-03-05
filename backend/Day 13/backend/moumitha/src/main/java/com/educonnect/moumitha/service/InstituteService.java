package com.educonnect.moumitha.service;

import java.util.List;

import com.educonnect.moumitha.dto.response.InstituteResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.model.Institute;

public interface InstituteService {
    
    List<InstituteResponse> getAll();

    InstituteResponse getByEmail(String email) throws NotFoundException;

    MessageResponse deleteById(String id);

    MessageResponse updateDetails(String id); 
}
