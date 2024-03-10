package com.educonnect.moumitha.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private String courseName;
    private String instituteName;
    private String degreeLevel;
    private int duration;
    private int noOfSemesters;
    private String description;
    private int noOfSeats;
    private float fees;
    
}
