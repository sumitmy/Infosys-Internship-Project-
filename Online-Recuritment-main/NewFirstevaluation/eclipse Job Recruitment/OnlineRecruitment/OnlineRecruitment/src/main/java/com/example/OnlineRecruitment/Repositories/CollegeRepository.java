package com.example.OnlineRecruitment.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.College;

@Repository
public interface CollegeRepository extends JpaRepository<College,Long>{

	@Query("SELECT c FROM College c WHERE c.roleId.roleId = :roleId")
	College getByRoleId(String roleId);
}
