package com.example.OnlineRecruitment.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class OtpControllers {
	
	@Autowired
	private OTPService otpService;
	
	@PostMapping("/generate-otp/{email}")
	    public String generateOTP(@PathVariable String email) {
	    System.out.println(email);
		return otpService.generateOTP(email);
    }
	
	 @PostMapping("/verify-otp/{email}/{otp}")
	    public boolean verifyOTP(@PathVariable String email, @PathVariable String otp) {
		 System.out.println("the otp verification");
		 System.out.println(otpService.verifyOTP(email, otp));
		 boolean otpout = otpService.verifyOTP(email, otp);
		 if(otpout) {
			 otpService.clearotphash(otp,email);
			 return otpout;
		 }
		 
		 return otpService.verifyOTP(email, otp);
	 }
	
}
