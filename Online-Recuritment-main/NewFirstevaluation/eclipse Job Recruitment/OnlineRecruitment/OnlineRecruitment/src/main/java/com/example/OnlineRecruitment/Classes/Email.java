package com.example.OnlineRecruitment.Classes;

public class Email {

	



	private String idName;

	private String email;
	
	private String password;
	
	private String roleId;
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getIdName() {
		return idName;
	}

	public void setIdName(String idName) {
		this.idName = idName;
	}
	
	@Override
	public String toString() {
		return "Email [idName=" + idName + ", email=" + email + ", password=" + password + ", roleId=" + roleId + "]";
	}
}
