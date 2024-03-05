package com.educonnect.moumitha.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.educonnect.moumitha.model.User;

public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);

}
