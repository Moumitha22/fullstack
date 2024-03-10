package com.educonnect.moumitha.model;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_institute")
public class Institute {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    @Builder.Default
    private boolean completed = false;

    @Column(nullable = true)
    private String instituteName;

    @Column(nullable = true)
    private String location;

    @Column(nullable = true)
    private String email;

    @Column(nullable = true)
    private String mobile;

    @Column(nullable = true)
    private String website;

    @Column(nullable = true)
    private String about;

    @Column(nullable = true)
    private int noOfCourses;

    @Column(nullable = true)
    private int noOfSeats;

    @OneToOne(mappedBy = "institute")
    private User user;

    @OneToMany(mappedBy = "institute")
    private List<Course> courses;
}