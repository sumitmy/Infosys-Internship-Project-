package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Entities.Employer;
import com.example.OnlineRecruitment.Services.EmployerService;

@RestController
@CrossOrigin("http://localhost:4200")
public class EmployerControllers {
	
	@Autowired
	EmployerService employerService;
	
	@PostMapping("/employer")
	public String saveEmployer(@RequestBody Employer employer) {
		return employerService.saveEmployer(employer); 
	}
	
	@GetMapping("/allemployer")
	public List<Employer> getAllEmployer(){
		return employerService.getAllEmployer();
	}
	
	@GetMapping("/employer/{roleId}")
	public Employer getById(@PathVariable String roleId) {
		return employerService.getEmployerById(roleId);
	}
	
	@GetMapping("/existsemployer/{roleId}")
	public boolean existsByEmployer(@PathVariable String roleId) {
		return employerService.checkEmployerExist(roleId);
	}
	
	@PutMapping("/updateemployer/{roleId}")
	public String updateEmployer(@PathVariable String roleId,@RequestBody
			Employer employer) {
		return employerService.updateEmployer(roleId,employer);
	}
	
	@DeleteMapping("/deleteemployer/{roleId}")
	public String deleteEmployer(@PathVariable String roleId) {
		return employerService.deleteEmployer(roleId);
	}
	
	
}
