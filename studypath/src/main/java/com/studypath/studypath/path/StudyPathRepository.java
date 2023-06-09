package com.studypath.studypath.path;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface StudyPathRepository 
    extends JpaRepository<StudyPath, Long> {
    
        @Query("SELECT s FROM StudyPath s WHERE s.title = ?1")
        Optional<StudyPath> findByTitle(String title);
}
