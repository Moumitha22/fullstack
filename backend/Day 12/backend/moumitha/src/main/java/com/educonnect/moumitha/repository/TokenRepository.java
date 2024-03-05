package com.educonnect.moumitha.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.educonnect.moumitha.model.Token;

public interface TokenRepository extends JpaRepository<Token,String>{
    List<Token> findAllByUser_IdAndExpiredIsFalseAndRevokedIsFalse(String id);  // User with tokem not expired and not revoked

    Optional<Token> findByToken(String token);
}
