package com.api.careerstarter.career;



import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CareerConfig {

    @Bean
    CommandLineRunner commandLineRunner(CareerRepository repository) {
        return args -> {
            Career softwareEngineer = new Career(
            "Software Engineer",
                    "A person who create a computer program for enterprise use."
                );

            Career webDeveloper = new Career(
                    "Web Developer",
                    "Creates and maintains websites, using programming languages, databases, and design tools to ensure functionality and user experience."
                );

            Career accountant= new Career(
                    "Accountant",
                    "Manages financial records, prepares tax returns, and provides financial advice to individuals or organizations."
                );
            Career architect = new Career(
                    "Architect",
                    "Designs and plans the construction of buildings, considering both aesthetic and functional aspects."
                );
            Career attorney = new Career(
                    "Attorney",
                    "Provides legal advice and representation to clients, specializing in various areas of law such as criminal, corporate, or family law."
                );

            Career dataScientist = new Career(
                "Data Scientist",
                "Analyzes and interprets complex data sets to uncover insights and make data-driven decisions for businesses or organizations."
            );

            repository.saveAll(
                List.of(
                    softwareEngineer, 
                    webDeveloper, 
                    accountant, 
                    architect, 
                    attorney, 
                    dataScientist
                )
            );
        };
    }

}
