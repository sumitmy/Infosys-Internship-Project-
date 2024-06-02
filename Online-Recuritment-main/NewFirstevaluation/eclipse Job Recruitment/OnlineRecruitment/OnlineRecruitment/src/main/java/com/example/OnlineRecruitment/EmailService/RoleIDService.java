package com.example.OnlineRecruitment.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class RoleIDService {
	@Autowired
	private JavaMailSender javaMailSender;

	public void sendEmail(String email, String roleId,String name,String password) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Online Recruitment Login Details");
        message.setText("HI,"+name+"\n"+"Please Kindly Login with Below details \n"+
        "email:"+email+"\n"+"password:"+password+"\n"+"Id:"+roleId+"\n");
        javaMailSender.send(message);
        System.out.println("Role Email Service(Login Details");
    }
}
