package com.example.OnlineRecruitment.ServiceInterface;

import java.util.List;

import com.example.OnlineRecruitment.Entities.User;

public interface UserServiceInterface {

	
	public void saveUser(User user);
	
	public User getUserById(Integer id);

	public List<User> getAllUsers();

	public void deleteUser(Integer id);

	public void updateUserById(Integer id, User user);
	
	

}
