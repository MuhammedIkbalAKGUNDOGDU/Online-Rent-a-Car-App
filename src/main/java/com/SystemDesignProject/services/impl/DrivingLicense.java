package com.SystemDesignProject.services.impl;

import lombok.Data;

@Data //we dont have to define functions like constructor, getters and setters
public class DrivingLicense {
	private String name;
	private String Surname;
	private String ID;
	private DateService expireDateService;
	private DateService startDateService;//if person do not have 2 year experience of drive can not register
	
}
