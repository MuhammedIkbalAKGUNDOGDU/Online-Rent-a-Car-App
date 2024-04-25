package com.SystemDesignProject.services.impl;

import com.SystemDesignProject.services.LoginServiceInterface;
import lombok.Data;
import org.springframework.stereotype.Service;

@Data
@Service
public class LoginService implements LoginServiceInterface {
	@Override
	public void takeCreditCard(String CartID, String expireMonth, String expireYear, String CVV) {
		CreditCardService card = new CreditCardService(CartID, expireMonth, expireYear, CVV);
	}
	@Override
	public void takeDriverLicense(String name, String surname, String ID, DateService startDateService, DateService expireDateService) {
		DrivingLicense card = new DrivingLicense(name, surname, ID, startDateService, expireDateService);
	}
	@Override
	public void register(String name,String Surname,String ID,String phoneNumber,String password) {
		//we access the database and WRİTE the information TO database
		//we need database information and back hand API request informations to code this part
	}
	@Override
	public void login(String phoneNumber,String password) {
		//we access the database and compare the information if informations are equals person can login
		//we need database information and back hand API request informations to code this part
	}
}
