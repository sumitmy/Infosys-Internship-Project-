package com.example.OnlineRecruitment.Entities;

import java.sql.Date;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userId;
	
	@NotEmpty(message = "Name is Invalid")
	private String name;
	
	@NaturalId
	@Email(message = "Email is Invalid")
	private String email;
	
	@NotEmpty(message="Invalid Password")
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character")
	private String password;
	

	@NotEmpty(message = "Invalid Address")
	private String address;

	@NotEmpty(message="Invalid Nationality")
	private String nationality;

	@Pattern(regexp = "^(9|8|6)\\d{9}$",message = "Invalid phone Number")
	private String phone; 
	
	@Transient
	private String signas;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="roleId")
	private Role role;
	
	
	public User() {
		super();
	}
	

	public User(String name, String email, String password, String address,
			String nationality, String phone, Role role,String signas) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		
		this.address = address;
		this.signas = signas;
		this.nationality = nationality;
		this.phone = phone;
		this.role = role;
	}
	

	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

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

	

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getSignas() {
		return signas;
	}


	public void setSignas(String signas) {
		this.signas = signas;
	}

	
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", password=" + password
				 + ", address=" + address + ", nationality="
				+ nationality + ", phone=" + phone + ", role=" + role + "]";
	}
	
}
