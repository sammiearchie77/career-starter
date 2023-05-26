package com.api.careerstarter.career;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CareerRepository 
    extends JpaRepository<Career, Long> {

    @Query("SELECT c FROM Career c WHERE c.title = ?1")
    Optional<Career> findByTitle(String title);
}
