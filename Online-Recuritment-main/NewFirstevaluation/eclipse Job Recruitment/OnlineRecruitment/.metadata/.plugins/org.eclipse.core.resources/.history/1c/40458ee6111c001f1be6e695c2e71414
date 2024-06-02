package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.eclipse.angus.mail.iap.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.OnlineRecruitment.Classes.Email;
import com.example.OnlineRecruitment.Classes.ForgotPassword;
import com.example.OnlineRecruitment.EmailService.RoleIDService;
import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Entities.Role;
import com.example.OnlineRecruitment.Entities.User;
import com.example.OnlineRecruitment.Repositories.RoleRepository;
import com.example.OnlineRecruitment.Repositories.UserRepository;
import com.example.OnlineRecruitment.ServiceInterface.UserServiceInterface;



@Service
public class UserService implements UserServiceInterface{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private RoleIDService roleIDService;
	
//	@Autowired
//	private GraduateService graduateService;
//	
	@Override
	public void saveUser(User user) {
		// TODO Auto-generated method stub
		
		Long count = 0l;
		Role role = new Role();
		if(user.getSignas().equals("graduate")) {
			role.setRoleTitle("Graduate");
			role.setRoleDescription("Job Seekers");
			count = roleRepository.countByRoleIdPrefix("GRAD");
			count+=1l;
			role.setRoleId("GRAD"+String.format("%05d", count));
			user.setRole(role);
		}
		else {
			role.setRoleTitle("Employer");
			role.setRoleDescription("Job Vendors");
			count = roleRepository.countByRoleIdPrefix("EMP");
			count+=1l;
			role.setRoleId("EMP"+String.format("%05d", count));
			user.setRole(role);
		}
	
		userRepository.save(user);
		roleIDService.sendEmail(user.getEmail(),user.getRole().getRoleId(),user.getName(),user.getPassword());
	}

	@Override
	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		return  userRepository.getById(id);
		
	}
	@Override
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	@Override
	public void deleteUser(Integer id) {
		userRepository.deleteById(id);
	}
	@Override
	public void updateUserById(Integer id,User user) {
		User updateUser = userRepository.getById(id);
		updateUser.setAddress(user.getAddress());

		updateUser.setEmail(user.getEmail());
	
		updateUser.setName(user.getName());
		updateUser.setNationality(user.getNationality());
		updateUser.setPassword(user.getPassword());
		updateUser.setPhone(user.getPhone());
		updateUser.setRole(user.getRole());
		userRepository.save(updateUser);
	}
	
	public boolean checkUserexist(Email email) throws Exception{
		User user = userRepository.findByEmail(email.getEmail()).orElse(null);
		
		if(user==null) {
			return false;
		}
		else {
			if(!user.getPassword().equals(email.getPassword())){
				return false;
			}
			else if(!user.getRole().getRoleId().equals(email.getRoleId())){
				return false;
			}
			
		}
		return true;
	}

	public boolean setForgotPassword(ForgotPassword forgotPass){
		User user = userRepository.findByEmail(forgotPass.getEmail()).orElse(null);
		if(user==null) {
			return false;
		}
		else {
			if(forgotPass.getNewPassword().equals(forgotPass.getConfirmPassword()))
			{
				if(forgotPass.getCurrentPassword().equals(user.getPassword())){
					user.setPassword(forgotPass.getNewPassword());
					userRepository.save(user);
					return true;
				}
			}
		}
		return false;
	}

	public boolean checkUserexistforregister(String email) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(email).orElse(null);
		
		if(user==null) {
			return false;
		}
		
		return true;
	}
	
	public String findByEmailRoleId(String roleId) {
		return userRepository.findByEmailRoleId(roleId);
	}

	
}
