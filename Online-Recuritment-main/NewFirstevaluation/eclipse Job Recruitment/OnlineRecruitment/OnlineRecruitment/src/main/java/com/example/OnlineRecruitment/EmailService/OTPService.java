package com.example.OnlineRecruitment.EmailService;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class OTPService {

	@Autowired
	private JavaMailSender javaMailSender;
	
	private final Map<String,String> otpMap = new HashMap<String,String>();
	
	 public String generateOTP(String email) {
	        Random random = new Random();
	        int otp = 100000 + random.nextInt(900000);
	        String otpString = String.valueOf(otp);
	        otpMap.put(email, otpString);
	        sendEmail(email, otpString);
	        return otpString;
	    }

	 public boolean verifyOTP(String email, String otp) {
	        String storedOTP = otpMap.get(email);
	        return storedOTP != null && storedOTP.equals(otp);
	    }

	    private void sendEmail(String email, String otp) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(email);
	        message.setSubject("OTP Verification");
	        message.setText("Your OTP for verification is: " + otp);
	        javaMailSender.send(message);
	    }
	    


	public void clearotphash(String otp, String email) {
		// TODO Auto-generated method stub
		for(Map.Entry m:otpMap.entrySet()){  
			   System.out.println(m.getKey()+" "+m.getValue());  
			  }  
		otpMap.remove(email,otp);
		for(Map.Entry m:otpMap.entrySet()){  
			   System.out.println(m.getKey()+" "+m.getValue());  
			  }  
	}
}
