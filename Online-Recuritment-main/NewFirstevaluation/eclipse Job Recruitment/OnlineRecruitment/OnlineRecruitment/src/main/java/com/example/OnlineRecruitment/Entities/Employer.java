package com.example.OnlineRecruitment.Entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class Employer{

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "roleId")
	private Role roleId;
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long employeeId;
	@NotEmpty(message = "Enter the roleInCompany")
	private String roleInCompany;
	@NotEmpty(message = "Enter the companyName")
	private String companyName;
	@NotEmpty(message = "Enter the companyType")
	private String companyType;
	@NotEmpty(message = "Enter the companyDescription")
	private String companyDescription;
	@NotEmpty(message = "Enter the CompanyAddress")
	private String companyAddress;
	
	private Integer companySize;
	
	public Employer() {
		super();
	}
	

	public Employer(Role roleId, Long employeeId, @NotEmpty(message = "Enter the roleInCompany") String roleInCompany,
			@NotEmpty(message = "Enter the companyName") String companyName,
			@NotEmpty(message = "Enter the companyType") String companyType,
			@NotEmpty(message = "Enter the companyDescription") String companyDescription,
			@NotEmpty(message = "Enter the CompanyAddress") String companyAddress, Integer companySize) {
		super();
		this.roleId = roleId;
		this.employeeId = employeeId;
		this.roleInCompany = roleInCompany;
		this.companyName = companyName;
		this.companyType = companyType;
		this.companyDescription = companyDescription;
		this.companyAddress = companyAddress;
		this.companySize = companySize;
	}
	
	
	public Role getRoleId() {
		return roleId;
	}

	public void setRoleId(Role roleId) {
		this.roleId = roleId;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getRoleInCompany() {
		return roleInCompany;
	}

	public void setRoleInCompany(String roleInCompany) {
		this.roleInCompany = roleInCompany;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public String getCompanyDescription() {
		return companyDescription;
	}

	public void setCompanyDescription(String companyDescription) {
		this.companyDescription = companyDescription;
	}

	public String getCompanyAddress() {
		return companyAddress;
	}

	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}

	public Integer getCompanySize() {
		return companySize;
	}

	public void setCompanySize(Integer companySize) {
		this.companySize = companySize;
	}
	
	@Override
	public String toString() {
		return "Employer [roleId=" + roleId + ", employeeId=" + employeeId + ", roleInCompany=" + roleInCompany
				+ ", companyName=" + companyName + ", companyType=" + companyType + ", companyDescription="
				+ companyDescription + ", companyAddress=" + companyAddress + ", companySize=" + companySize + "]";
	}
	
}
