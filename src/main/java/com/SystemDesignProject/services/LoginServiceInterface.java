package com.SystemDesignProject.services;

import com.SystemDesignProject.services.impl.DateService;

public interface LoginServiceInterface{
    void takeCreditCard(String CartID, String expireMonth, String expireYear, String CVV);
    void takeDriverLicense(String name, String surname, String ID, DateService startDateService, DateService expireDateService);
    void register(String name,String Surname,String ID,String phoneNumber,String password);
    void login(String phoneNumber,String password);
}
