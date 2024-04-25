package com.SystemDesignProject.services.impl;

import lombok.Data;

@Data //we dont have to define functions like constructor, getters and setters
public class PersonService {
	private String name;
	private String surname;
	private String ID;
	private String phoneNumber;
	private String password;
	private CreditCardService creditCardService;
	private int driverPoint; //point of person if he do car crush take - point 
	private int Bonus;// bonus money or deposit(money that pay before)
}
