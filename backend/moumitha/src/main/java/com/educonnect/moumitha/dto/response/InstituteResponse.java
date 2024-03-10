package com.educonnect.moumitha.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstituteResponse {
    private String instituteName;
    private String location;
    private String email;
    private String mobile;
    private String website;
    private String about;
    private int noOfCourses;
    private int noOfSeats;
}