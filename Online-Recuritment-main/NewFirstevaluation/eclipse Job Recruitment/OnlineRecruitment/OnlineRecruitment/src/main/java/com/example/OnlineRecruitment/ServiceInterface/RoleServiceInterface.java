package com.example.OnlineRecruitment.ServiceInterface;

import com.example.OnlineRecruitment.Entities.Role;

public interface RoleServiceInterface {
	
	public void setRole(Role role);
	

	public void deleteRoleById(String roleId);

	public void updateRoleById(String roleId, Role role);

	public Role getRoleById(String roleId);
	
	
}
