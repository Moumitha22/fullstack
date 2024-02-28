package com.educonnect.moumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.educonnect.moumitha.model.Token;

public interface TokenRepository extends JpaRepository<Token,String>{

}
