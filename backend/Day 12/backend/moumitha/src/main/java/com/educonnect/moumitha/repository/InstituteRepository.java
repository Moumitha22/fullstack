package com.educonnect.moumitha.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educonnect.moumitha.model.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, String> {
    Optional<Institute> findByEmail(String email);  
}