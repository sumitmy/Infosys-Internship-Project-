package com.example.OnlineRecruitment.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Employer;
import com.example.OnlineRecruitment.Entities.Job;
@Repository
public interface JobRepository extends JpaRepository<Job,Integer>{

	@Query("SELECT j FROM Job j WHERE j.roleId.roleId = :roleId")
	Job getByRoleId(String roleId);
	
	@Query("SELECT j FROM Job j WHERE j.roleId.roleId = :roleId")
	List<Job> findAllJobsById(String roleId);
	
	@Query("SELECT j FROM Job j WHERE j.jobType LIKE :prefix%")
	List<Job> findTheJobsOnSearch(@Param("prefix") String prefix );
	
	
}
