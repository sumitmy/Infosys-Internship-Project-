package com.example.OnlineRecruitment.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Appointment {

	@Id
	private String applicantId;
	
	private String date;

	private String location;
	
	private boolean isSet;
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY,mappedBy = "appointment",cascade = CascadeType.ALL)
	@JoinColumn(name="jobSeeker")
	private JobSeeker jobSeeker;
	
	public Appointment() {
		super();
	}
	public Appointment(String applicantId, String date, String location, boolean isSet, JobSeeker jobSeeker) {
		super();
		this.applicantId = applicantId;
		this.date = date;
		this.location = location;
		this.isSet = isSet;
		this.jobSeeker = jobSeeker;
	}
	public String getApplicantId() {
		return applicantId;
	}
	public void setApplicantId(String applicantId) {
		this.applicantId = applicantId;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public boolean isSet() {
		return isSet;
	}
	public void setSet(boolean isSet) {
		this.isSet = isSet;
	}
	public JobSeeker getJobSeeker() {
		return jobSeeker;
	}
	public void setJobSeeker(JobSeeker jobSeeker) {
		this.jobSeeker = jobSeeker;
	}
}
