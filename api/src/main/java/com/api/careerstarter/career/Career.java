package com.api.careerstarter.career;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Career {
    @Id
    @SequenceGenerator(
        name = "careerstarter_sequence",
        sequenceName = "careerstarter_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "career_sequence"

    )
    private Long id;
    private String title;
    private String description;
    private String requiredSkill;
    private String salaryRange;

    public Career(){
        // Default constructor 
    }
    /**
     * @param id
     * @param title
     * @param description
     * @param requiredSkill
     * @param salaryRange
     */
    public Career(
            String title,
            String description,
            String requiredSkill,
            String salaryRange) {
        this.title = title;
        this.description = description;
        this.requiredSkill = requiredSkill;
        this.salaryRange = salaryRange;
    }

    // Getters and Setters
    public Long getId(){
        return id;
        
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getRequiredSkill(){
        return requiredSkill;
    }

    public void setRequiredSkill(String requiredSkill){
        this.requiredSkill = requiredSkill;
    }

    public String getSalaryRange(){
        return salaryRange;
    }

    public void setSalaryRange(String salaryRange){
        this.salaryRange = salaryRange;
    }

    // to String
    @Override
    public String toString(){
        return String.format("%d, %s, %s, %s, %s", 
        this.id, this.title, this.description,
        this.requiredSkill, this.salaryRange
        );
    }
}
