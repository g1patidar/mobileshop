import "../css/paymentpage.css"
const Paymentpage=()=>{
    return(
        <>
            <div className="heading-payment">Payment</div>
            
            <div className="payment-options-price-details">
                <div className="payment-options">
                    <div className="payment-options-heading">PAYMENT OPTION</div>
                    <div className="phonepay-option">
                        <input type="radio" name="paymentoptions"/>
                        <img src="./images/phonepe.png" />
                        <span>Phonepe UPI 88XXXXXX270@ybl</span>
                        <button>Continue</button>
                    </div>
                    <hr/>
                    <div className="googlepay-option">
                        <input type="radio" name="paymentoptions"/>
                        <img src="./images/googlepay.png" />
                        <span>UPI</span>
                        
                    </div>
                    <hr/>
                    <div className="credit-debit-atm">
                        <input type="radio" name="paymentoptions"/>
                        <img src="./images/rupay.png" />
                        <div>
                            <span>Credit / Debit / ATM Card</span>
                            <div className="rbi-guidelines">Add and secure  cards as per RBI guidelines</div>
                        </div>
                       
                    </div>
                    <hr/>
                    <div className="cash-on">
                        <input type="radio" name="paymentoptions"/>
                        <img src="./images/cashon.jpeg" />
                        <span>Cash on Delivery</span>
                        
                    </div>
                    <hr/>
                </div>

                {/* part 2 */}

                <div className="prices-details-category">
                    <div>
                        <h1 className="price-details">PRICE DETAILS</h1>
                        <div>
                            <div className="main-product-price"></div>
                            <div className="delivery-charges"></div>
                            <div className="packaging-charges"></div>
                            <div className="amount-payable"></div>
                        </div>
                        <div className="proceed-to-pay"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Paymentpage;