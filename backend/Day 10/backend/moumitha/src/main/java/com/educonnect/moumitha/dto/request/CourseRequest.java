package com.educonnect.moumitha.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {  
    private String courseName;
    private String instituteName;
    private String degreeLevel;
    private int duration;
    private int noOfSemesters;
    private String description;
    private float fees;
    private String instituteId;
}