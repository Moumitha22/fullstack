package com.educonnect.moumitha.model;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_student")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    @Builder.Default
    private boolean completed = false;

    @Column(nullable = true)
    private String email;

    @Column(nullable = true)
    private String fatherName;

    @Column(nullable = true)
    private String motherName;

    @Column(nullable = true)
    private Date dob;

    @Column(nullable = true)
    private String gender;

    @Column(nullable = true)
    private String emisNo;

    @Column(nullable = true)
    private String aadharNo;

    @Column(nullable = true)
    private String nationality;

    @Column(nullable = true)
    private String tenthBoard;

    @Column(nullable = true)
    private float tenthPercentage; 

    @Column(nullable = true)
    private String twelthBoard;

    @Column(nullable = true)
    private float twelthPercentage;

    @OneToOne(mappedBy = "student")
    private User user;

    @OneToMany(mappedBy = "student")
    private List<Application> applications;
}
