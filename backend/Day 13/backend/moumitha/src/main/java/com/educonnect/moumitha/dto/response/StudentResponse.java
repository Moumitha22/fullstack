package com.educonnect.moumitha.dto.response;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponse {  
    private String email;
    private String fatherName;
    private String motherName;
    private Date dob;
    private String gender;
    private String emisNo;
    private String aadharNo;
    private String nationality;
    private String tenthBoard;
    private String twelthBoard;
    private float tenthPercentage; 
    private float twelthPercentage;
}