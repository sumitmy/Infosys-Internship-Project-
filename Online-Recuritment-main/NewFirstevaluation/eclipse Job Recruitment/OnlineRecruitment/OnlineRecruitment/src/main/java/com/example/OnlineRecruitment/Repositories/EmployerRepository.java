package com.example.OnlineRecruitment.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Employer;
import com.example.OnlineRecruitment.Entities.Graduate;

@Repository
public interface EmployerRepository extends JpaRepository<Employer,Long>{
	@Query("SELECT e FROM Employer e WHERE e.roleId.roleId = :roleId")
	Employer getByRoleId(String roleId);
}
