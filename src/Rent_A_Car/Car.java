package Rent_A_Car;

public class Car {

	String brand, model, plate, serialNo;
	int yearOfProduction, currKilometer, percentageMaintenance;
	public Car(String brand, String model, String plate, String serialNo, int yearOfProduction, int currKilometer,
			int percentageMaintenance) {
		this.brand = brand;
		this.model = model;
		this.plate = plate;
		this.serialNo = serialNo;
		this.yearOfProduction = yearOfProduction;
		this.currKilometer = currKilometer;
		this.percentageMaintenance = percentageMaintenance;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getPlate() {
		return plate;
	}
	public void setPlate(String plate) {
		this.plate = plate;
	}
	public String getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}
	public int getYearOfProduction() {
		return yearOfProduction;
	}
	public void setYearOfProduction(int yearOfProduction) {
		this.yearOfProduction = yearOfProduction;
	}
	public int getCurrKilometer() {
		return currKilometer;
	}
	public void setCurrKilometer(int currKilometer) {
		this.currKilometer = currKilometer;
	}
	public int getPercentageMaintenance() {
		return percentageMaintenance;
	}
	public void setPercentageMaintenance(int percentageMaintenance) {
		this.percentageMaintenance = percentageMaintenance;
	}
	
	
	
}
