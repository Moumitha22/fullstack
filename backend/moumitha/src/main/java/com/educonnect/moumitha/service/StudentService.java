package com.educonnect.moumitha.service;

import java.util.List;

import com.educonnect.moumitha.dto.request.UpdateStudentRequest;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.dto.response.StudentResponse;
import com.educonnect.moumitha.exception.NotFoundException;

public interface StudentService {
    List<StudentResponse> getAll();

    StudentResponse getByEmail(String email) throws NotFoundException;

    MessageResponse deleteByEmail(String email);

    MessageResponse updateDetails(UpdateStudentRequest request,String id);
}
