package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Entities.Job;
import com.example.OnlineRecruitment.Repositories.GraduateRepository;
import com.example.OnlineRecruitment.Repositories.JobRepository;
import com.example.OnlineRecruitment.ServiceInterface.JobServiceInterface;
@Service
public class JobService {
	
	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private GraduateRepository graduateRepository;
	
	public void createJob(Job job) {
		
		jobRepository.save(job);
	}
	
	public void deleteJob(Integer id) {
		jobRepository.deleteById(id);
	}
	
	public List<Job> getJobById(String roleId) {
		return jobRepository.findAllJobsById(roleId);
	}
	
	public List<Job> getAllJobs(){
		return jobRepository.findAll();
	}
	
	public void updateJobById(Integer id,Job job) {
		Job updateJob = jobRepository.getById(id);
		updateJob.setJobDescription(job.getJobDescription());
		updateJob.setJobName(job.getJobName());
		updateJob.setJobSalary(job.getJobSalary());
		updateJob.setJobType(job.getJobType());
		updateJob.setJobVacancy(job.getJobVacancy());
		
		jobRepository.save(updateJob);
	}

//	public List<Graduate> listOfAllgraduateById(String roleId) {
//		Job job = jobRepository.getByRoleId(roleId);
//		return job.getGraduate();
//	}

	public Job getJobsByIntegerId(Integer id) {
		// TODO Auto-generated method stub
		return jobRepository.getById(id);
	}
	
	public List<Job> getJobsBySearch(String prefix){
		return jobRepository.findTheJobsOnSearch(prefix);
	}
	
}
