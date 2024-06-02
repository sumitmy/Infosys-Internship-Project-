package com.example.OnlineRecruitment.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Entities.Role;
import com.example.OnlineRecruitment.Services.RoleService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("http://localhost:4200")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@PostMapping("/role")
	public void setRole(Role role) {
		roleService.setRole(role);
	}
	
	@GetMapping("/role/{id}")
	public Role getRole(@PathVariable String id) {
		System.out.println(roleService.getRoleById(id));
		return roleService.getRoleById(id);
	}
	
	@DeleteMapping("/deleterole/{id}")
	public String deleteRoleById(@PathVariable String id) {
		System.out.println(id);
		roleService.deleteRoleById(id);
		return "Role Deleted";
	}
	
	@PutMapping("/updaterole/{id}")
	public String updateRoleById(@PathVariable String id,@Valid @RequestBody Role role) {
		
		roleService.updateRoleById(id, role);
		return "update Role";
	}
}
