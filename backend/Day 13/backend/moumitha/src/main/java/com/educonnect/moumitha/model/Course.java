package com.educonnect.moumitha.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "_course")
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String instituteName;

    @Column(nullable = false)
    private String degreeLevel;

    @Column(nullable = false)
    private int duration;

    @Column(nullable = false)
    private int noOfSemesters;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private float fees;

    @OneToOne(mappedBy = "course")
    private Application application;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "institute_id")
    private Institute institute;
}