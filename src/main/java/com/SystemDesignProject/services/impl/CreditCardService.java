package com.SystemDesignProject.services.impl;

import lombok.Data;

@Data //we dont have to define functions like constructor, getters and setters
public class CreditCardService {
	private String cartID;
    private String expireMonth;
    private String expireYear;
    private String CVV;
}
