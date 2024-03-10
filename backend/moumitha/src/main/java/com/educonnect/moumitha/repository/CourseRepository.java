package com.educonnect.moumitha.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educonnect.moumitha.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
    Optional<Course> findByInstituteIdAndCourseName(String instituteId, String courseName);

    List<Course> findByInstituteId(String institiuteId);
}