package com.example.OnlineRecruitment.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Entities.Role;

@Repository
public interface GraduateRepository extends JpaRepository<Graduate,Long>{
	
	@Query("SELECT g FROM Graduate g WHERE g.roleId.roleId = :roleId")
	Graduate getByRoleId(String roleId);
}
