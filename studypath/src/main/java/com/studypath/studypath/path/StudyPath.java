package com.studypath.studypath.path;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class StudyPath {
    @Id
    @SequenceGenerator(
        name = "studypath_sequence",
        sequenceName = "studypath_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
    )

    private Long id;
    private String title;
    private String degreeProgram;
    private String certification;
    private String internship;
    private String learningResources;

    public StudyPath(){
        // Default constructor
    }

    /**
     * @param title
     * @param degreeProgram
     * @param certification
     * @param internship
     * @param learningResources
     */
    public StudyPath(
        String title,
        String degreeProgram,
        String certification,
        String internship,
        String learningResources
        ){
            this.title = title;
            this.degreeProgram = degreeProgram;
            this.certification = certification;
            this.internship = internship;
            this.learningResources = learningResources;
        }

        // Getters and Setters
        public Long getId(){
            return id;
        }

        public void setId(Long id){
            this.id = id;
        }

        public String getTitle(){
            return title;
        }

        /**
         * @param title
         */
        public void setTitle(String title){
            this.title = title;
        }

        public String getDegreeProgram(){
            return degreeProgram;
        }

        public void setDegreeProgram(String degreeProgram){
            this.degreeProgram = degreeProgram;
        }

        public String getCertification(){
            return certification;
        }

        public void setCertification(String certification){
            this.certification = certification;
        }

        /**
         * @return
         */
        public String getInternship(){
            return internship;
        }

        public void setInternship(String internship){
            this.internship = internship;
        }

        public String getlearningResources(){
            return learningResources;
        }

        public void setLearningResources(String learningResources){
            this.learningResources = learningResources;
        }

        @Override
        public String toString(){
            return String.format("%d, %s, %s, %s, %s %s",
                this.id, this.title, this.degreeProgram, 
                this.certification, this.internship, this.learningResources
            );
        }
}
