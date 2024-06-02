package com.example.OnlineRecruitment.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.OnlineRecruitment.Entities.Role;

public interface RoleRepository extends JpaRepository<Role,String>{
	
//	Role findByRoleId(String roleId); 
	@Query("SELECT COUNT(e) FROM Role e WHERE e.roleId LIKE :prefix%")
    public Long countByRoleIdPrefix(@Param("prefix") String prefix);
}
