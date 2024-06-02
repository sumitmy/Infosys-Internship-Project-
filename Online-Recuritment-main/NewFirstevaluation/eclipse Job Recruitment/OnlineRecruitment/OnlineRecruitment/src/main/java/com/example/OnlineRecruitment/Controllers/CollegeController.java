package com.example.OnlineRecruitment.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Entities.College;
import com.example.OnlineRecruitment.Services.CollegeService;

@RestController
@CrossOrigin("http://localhost:4200")
public class CollegeController {
	
	@Autowired
	private CollegeService collegeService;
	
	@PostMapping("/college")
	public String saveCollege(@RequestBody College college) {
		return collegeService.saveRepository(college);
	}
	
	
	@GetMapping("/college/{roleId}")
	public College getCollegeByRoleId(@PathVariable String roleId) {
		return collegeService.getCollegeByRoleID(roleId);
	}
	
	@PutMapping("/updatecollege/{roleId}")
	public String updateCollege(@RequestBody College college,@PathVariable String
			roleId) {
		return collegeService.updateCollegeByRoleId(college,roleId);
	}
	
	@DeleteMapping("/deletecollege/{roleId}")
	public String deleteCollege(@PathVariable String roleId) {
		return collegeService.deleteCollegeByRoleId(roleId);
	}
	
	
}
