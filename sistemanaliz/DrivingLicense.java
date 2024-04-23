package sistemanaliz;

public class DrivingLicense {
	private String name;
	private String Surname;
	private String ID;
	private Date expireDate;
	private Date startDate;//if person do not have 2 year experience of drive can not register
	
	public DrivingLicense(String name, String surname, String iD, Date expireDate, Date startDate) {
		super();
		this.name = name;
		Surname = surname;
		ID = iD;
		this.expireDate = expireDate;
		this.startDate = startDate;
	}

	public String getName() {
		return name;
	}

	public String getSurname() {
		return Surname;
	}

	public String getID() {
		return ID;
	}

	public Date getExpireDate() {
		return expireDate;
	}
	
}
