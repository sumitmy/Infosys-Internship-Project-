package com.example.OnlineRecruitment.ServiceInterface;

import java.util.List;

import com.example.OnlineRecruitment.Entities.Job;

public interface JobServiceInterface {

	public void createJob(Job job);

	public void deleteJob(Integer id);

	public Job getJobById(Integer id);

	public List<Job> getAllJobs();

	public void updateJobById(Integer id, Job job);

}
