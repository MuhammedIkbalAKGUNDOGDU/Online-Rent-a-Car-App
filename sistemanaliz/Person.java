package sistemanaliz;

public class Person {
	private String name;
	private String surname;
	private String ID;
	private String phoneNumber;
	private String password;
	private CreditCard creditCard;
	private int driverPoint; //point of person if he do car crush take - point 
	private int Bonus;// bonus money or deposit(money that pay before)
	
	public Person(String name, String surname, String iD, String phoneNumber, String password, CreditCard creditCard) {
		super();
		this.name = name;
		this.surname = surname;
		ID = iD;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.creditCard = creditCard;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getDriverPoint() {
		return driverPoint;
	}

	public void setDriverPoint(int driverPoint) {
		this.driverPoint = driverPoint;
	}

	public int getBonus() {
		return Bonus;
	}

	public void setBonus(int bonus) {
		Bonus = bonus;
	}

	public String getName() {
		return name;
	}

	public String getSurname() {
		return surname;
	}

	public String getID() {
		return ID;
	}

	public CreditCard getCreditCard() {
		return creditCard;
	}
	
	
	
}
