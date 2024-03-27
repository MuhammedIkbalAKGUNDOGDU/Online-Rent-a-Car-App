package Rent_A_Car;

public class Customer {

	String name, surName, userName, password;
	Credit_Card creditCard;
	License license;
	public Customer(String name, String surName, String userName, String password, Credit_Card creditCard,
			License license) {
		this.name = name;
		this.surName = surName;
		this.userName = userName;
		this.password = password;
		this.creditCard = creditCard;
		this.license = license;
		
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurName() {
		return surName;
	}
	public void setSurName(String surName) {
		this.surName = surName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Credit_Card getCreditCard() {
		return creditCard;
	}
	public void setCreditCard(Credit_Card creditCard) {
		this.creditCard = creditCard;
	}
	public License getLicense() {
		return license;
	}
	public void setLicense(License license) {
		this.license = license;
	}
	
	
}

