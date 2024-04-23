package sistemanaliz;

public class loginInterface {
	void takecreditCard(String CartID,String expireMonth,String expireYear,String CVV) {
		CreditCard card = new CreditCard(CartID, expireMonth, expireYear, CVV);
	}
	void takeDriverLicense(String name,String surname,String ID,Date startDate,Date expireDate) {
		DrivingLicense card = new DrivingLicense(name, surname, ID, startDate,expireDate);
	}
	void register(String name,String Surname,String ID,String phoneNumber,String password) {
		//we access the database and WRİTE the information TO database 
		//we need database information and back hand API request informations to code this part
	}
	void login(String phoneNumber,String password) {
		//we access the database and compare the information if informations are equals person can login 
		//we need database information and back hand API request informations to code this part
	}
}
