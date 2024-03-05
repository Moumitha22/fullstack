package com.educonnect.moumitha.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.CourseRequest;
import com.educonnect.moumitha.dto.response.CourseResponse;
import com.educonnect.moumitha.dto.response.MessageResponse;
import com.educonnect.moumitha.exception.NotFoundException;
import com.educonnect.moumitha.model.Course;
import com.educonnect.moumitha.model.Institute;
import com.educonnect.moumitha.repository.CourseRepository;
import com.educonnect.moumitha.repository.InstituteRepository;
import com.educonnect.moumitha.service.CourseService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository; 
    private final InstituteRepository instituteRepository; 
    
    @Override
    public MessageResponse addCourse(CourseRequest request) throws NotFoundException{
        Optional<Course> isCourse = courseRepository.findByInstituteIdAndCourseName(request.getInstituteId(),request.getCourseName());
        
        if(isCourse.isPresent()){
            return MessageResponse.builder().message("Course already exists in institute.").build();
        }
        
        Institute institute = instituteRepository.findById(request.getInstituteId())
                .orElseThrow(() -> new NotFoundException("Institute not found"));

        Course course = Course.builder()
                .courseName(request.getCourseName())
                .instituteName(request.getInstituteName())
                .degreeLevel(request.getDegreeLevel())
                .duration(request.getDuration())
                .noOfSemesters(request.getNoOfSemesters())
                .description(request.getDescription())
                .fees(request.getFees())
                .institute(institute) 
                .build();

        courseRepository.save(course);
        return MessageResponse.builder().message("Course registered successfully").build();
    }


    @Override
    public List<CourseResponse> getAll() {
         List<Course> courses = courseRepository.findAll();
        return courses.stream().map(course -> CourseResponse.builder()
                        .courseName(course.getCourseName())
                        .instituteName(course.getInstituteName())
                        .degreeLevel(course.getDegreeLevel())
                        .duration(course.getDuration())
                        .noOfSemesters(course.getNoOfSemesters())
                        .description(course.getDescription())
                        .fees(course.getFees())
                        .build())
                .collect(Collectors.toList());
   }

    @Override
    public CourseResponse getByInstitute(String institute) throws NotFoundException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getByInstitute'");
    }

    @Override
    public MessageResponse deleteById(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteById'");
    }

    @Override
    public MessageResponse updateDetails(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateDetails'");
    }

    
}
