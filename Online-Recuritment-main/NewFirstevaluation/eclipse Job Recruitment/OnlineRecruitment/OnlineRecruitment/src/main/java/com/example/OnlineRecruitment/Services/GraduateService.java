package com.example.OnlineRecruitment.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Classes.graduateJob;
import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Entities.Job;
import com.example.OnlineRecruitment.Repositories.GraduateRepository;
import com.example.OnlineRecruitment.Repositories.JobRepository;

@Service
public class GraduateService {
	
	@Autowired
	GraduateRepository graduateRepository;
	
	@Autowired
	JobRepository jobRepository;
	
	public void saveGraduate(Graduate graduate) {
		graduateRepository.save(graduate);
	}
	
	public Graduate getGraduateById(String roleId) {
		
		return graduateRepository.getByRoleId(roleId);
	}
	
	public List<Graduate> getAllGraduate(){
		return graduateRepository.findAll();
	}
	
	
	
	public boolean checkGraduateExist(String roleId) {
		Graduate graduate = graduateRepository.getByRoleId(roleId);
		
		if(graduate==null) {
			System.out.println("this is false ");
			return false;
		}
		else {
			
			return true;
		}
	}
	
	public String addJob(graduateJob graduateJob) {
		Graduate graduate = graduateRepository.getByRoleId(graduateJob.getRoleId());
		Job job = jobRepository.getById(graduateJob.getJobId());
		
//		if(graduate.getJobs()==null) {
//			graduate.setJobs(job);
//		}
//		else {
			Graduate newgrad = new Graduate();
			newgrad.setCgpa(graduate.getCgpa());
			newgrad.setCity(graduate.getCity());
			newgrad.setPinCode(graduate.getPinCode());
			newgrad.setRoleId(graduate.getRoleId());
			newgrad.setState(graduate.getState());
			newgrad.setYearOfPassing(graduate.getYearOfPassing());
//			newgrad.setJobs(job);
			graduateRepository.save(newgrad);
			return "new Grad";
//		}
		
		
//		graduateRepository.save(graduate);
//		return "saved";
	}

	public String updateService(Graduate graduate, String roleId) {
		// TODO Auto-generated method stub
		System.out.println(roleId);
		Graduate grad = graduateRepository.getByRoleId(roleId);
		grad.setCgpa(graduate.getCgpa());
		grad.setCity(graduate.getCity());
		grad.setState(graduate.getState());
		grad.setYearOfPassing(graduate.getYearOfPassing());
		graduateRepository.save(grad);
		return "updated";
	}

	public String deleteGraduate(String roleId) {
		// TODO Auto-generated method stub
		Graduate graduate = graduateRepository.getByRoleId(roleId);
		graduateRepository.delete(graduate);
		return "deleted";
	}

	public Long getStudentId(String roleId) {
		// TODO Auto-generated method stub
		return graduateRepository.getByRoleId(roleId).getStudentId();
	}

//	public List<Job> getListofJobsofGraduateById(String roleId) {
//		List<Job> Jobs = graduateRepository.find
//		return null;
//	}


}
