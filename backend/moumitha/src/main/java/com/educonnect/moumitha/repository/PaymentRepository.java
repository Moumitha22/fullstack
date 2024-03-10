package com.educonnect.moumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educonnect.moumitha.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, String> {
    
}