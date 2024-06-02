package com.example.OnlineRecruitment.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;

@Entity
public class College {
	
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "roleId")
	private Role roleId;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	@NotBlank(message = "Enter the College Name")
	private String collegeName;
	@NotBlank(message = "Enter the College Description")
	private String collegeDescription;
	@NotBlank(message = "Enter the College Address")
	private String collegeAddress;
	
	
	public College() {
		super();
	}
	
	public College(Role roleId, Long id, @NotBlank(message = "Enter the College Name") String collegeName,
			@NotBlank(message = "Enter the College Description") String collegeDescription,
			@NotBlank(message = "Enter the College Address") String collegeAddress) {
		super();
		this.roleId = roleId;
		this.id = id;
		this.collegeName = collegeName;
		this.collegeDescription = collegeDescription;
		this.collegeAddress = collegeAddress;
	}
	
	public Role getRoleId() {
		return roleId;
	}
	public void setRoleId(Role roleId) {
		this.roleId = roleId;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getCollegeDescription() {
		return collegeDescription;
	}
	public void setCollegeDescription(String collegeDescription) {
		this.collegeDescription = collegeDescription;
	}
	public String getCollegeAddress() {
		return collegeAddress;
	}
	public void setCollegeAddress(String collegeAddress) {
		this.collegeAddress = collegeAddress;
	}
	
	
	
}	
