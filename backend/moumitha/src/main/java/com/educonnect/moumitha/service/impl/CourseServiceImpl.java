package com.educonnect.moumitha.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.educonnect.moumitha.dto.request.CourseRequest;
import com.educonnect.moumitha.dto.request.CourseUpdateRequest;
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
                .noOfSeats(request.getNoOfSeats())
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
                        .noOfSeats(course.getNoOfSeats())
                        .build())
                .collect(Collectors.toList());
   }


    @Override
    public List<CourseResponse> getByInstitute(String instituteId) {
        List<Course> courses = courseRepository.findByInstituteId(instituteId);
        return courses.stream().map(course -> CourseResponse.builder()
                        .courseName(course.getCourseName())
                        .instituteName(course.getInstituteName())
                        .degreeLevel(course.getDegreeLevel())
                        .duration(course.getDuration())
                        .noOfSemesters(course.getNoOfSemesters())
                        .description(course.getDescription())
                        .fees(course.getFees())
                        .noOfSeats(course.getNoOfSeats())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public MessageResponse deleteById(String id) {
        Optional<Course> isCourse = courseRepository.findById(id);
        
        if(isCourse.isEmpty()){
            return MessageResponse.builder().message("Course not found").build();
        }
        courseRepository.delete(isCourse.get());
        return MessageResponse.builder().message("Course deleted successfully").build();   
    }

    @Override
    public MessageResponse updateDetails(CourseUpdateRequest request,String id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);

        if (optionalCourse.isEmpty()) {
            return MessageResponse.builder().message("Course not found").build();
        }

        Course course = optionalCourse.get();
        course.setCourseName(request.getCourseName());
        course.setDegreeLevel(request.getDegreeLevel());
        course.setDuration(request.getDuration());
        course.setNoOfSemesters(request.getNoOfSemesters());
        course.setDescription(request.getDescription());
        course.setFees(request.getFees());
        course.setNoOfSeats(request.getNoOfSemesters());

        courseRepository.save(course);        

        return MessageResponse.builder()
                .message("Course details updated successfully")
                .build();
    }    
}
