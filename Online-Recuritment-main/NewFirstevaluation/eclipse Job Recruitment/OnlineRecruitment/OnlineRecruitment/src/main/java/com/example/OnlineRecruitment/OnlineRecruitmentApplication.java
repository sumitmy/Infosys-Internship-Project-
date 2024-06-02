package com.example.OnlineRecruitment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.OnlineRecruitment.Entities.Generators.CustomIdGenerator;

import jakarta.persistence.EntityManager;



@SpringBootApplication
public class OnlineRecruitmentApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(OnlineRecruitmentApplication.class, args);
	}
	
}
