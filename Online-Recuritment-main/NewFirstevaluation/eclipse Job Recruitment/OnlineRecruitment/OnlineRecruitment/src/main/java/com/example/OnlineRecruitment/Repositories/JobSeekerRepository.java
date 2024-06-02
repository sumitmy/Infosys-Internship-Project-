package com.example.OnlineRecruitment.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Employer;
import com.example.OnlineRecruitment.Entities.JobSeeker;

@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeeker,Long>{

	@Query("SELECT js FROM JobSeeker js WHERE js.job.roleId.roleId = :roleId")
	List<JobSeeker> getAllJobseekerByemployeeId(String roleId);

	@Query("SELECT js FROM JobSeeker js WHERE js.graduate.roleId.roleId = :roleId")
	List<JobSeeker> getAllJobSeekerByStudentId(String roleId);

	@Query("SELECT js FROM JobSeeker js WHERE js.appointment.applicantId = :applicationId")
	JobSeeker getByAppointmentId(String applicationId);

	

	
}
