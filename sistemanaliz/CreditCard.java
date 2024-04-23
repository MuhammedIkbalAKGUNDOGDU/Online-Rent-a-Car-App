package sistemanaliz;

public class CreditCard {
	private String cartID;
    private String expireMonth;
    private String expireYear;
    private String CVV;
	public CreditCard(String cartID2, String expireMonth2, String expireYear2, String cVV2) {
		super();
		this.cartID = cartID2;
		this.expireMonth = expireMonth2;
		this.expireYear = expireYear2;
		CVV = cVV2;
	}
	public String getCartID() {
		return cartID;
	}
	public String getExpireMonth() {
		return expireMonth;
	}
	public String getExpireYear() {
		return expireYear;
	}
	public String getCVV() {
		return CVV;
	}
    
    
}
