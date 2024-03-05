package com.educonnect.moumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educonnect.moumitha.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, String> {
    
}