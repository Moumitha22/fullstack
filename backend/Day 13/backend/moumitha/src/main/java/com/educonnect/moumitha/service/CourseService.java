package com.educonnect.moumitha.service;

import java.util.List;

import com.educonnect.moumitha.dto.request.CourseRequest;
import com.educonnect.moumitha.dto.response.CourseResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;

public interface CourseService {
    MessageResponse addCourse(CourseRequest request) throws NotFoundException;

    List<CourseResponse> getAll();

    CourseResponse getByInstitute(String institute) throws NotFoundException;

    MessageResponse deleteById(String id);

    MessageResponse updateDetails(String id); 
}
