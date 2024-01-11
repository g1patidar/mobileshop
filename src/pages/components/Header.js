import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
        <div style={{borderBottom:"1px solid black"}}>
            <div className="nav_email">
                <Link>
                    <img src="./images/gmail3.png" alt="gamil" />
                    <span className="Email_txt" > Email : meenanandu016@gmail.com</span>

                </Link>

                <Link>
                    <span className="nav_call">
                        <img src="./images/call.png" alt="" style={{ marginTop: "-5px" }} />

                        <span style={{ color: "white", marginLeft: "19px", marginTop: "15px", position: "absolute", fontSize: "13px" }}>
                            <span className="call_txt">
                                Call Support : 123456789
                            </span>
                        </span>

                    </span>

                </Link>


                <Link to="loginpage">

                    <span className="nav_profile">
                        <img src="./images/profile1.png" alt="wishlist" style={{ marginLeft: "820px" }} />
                        <span className="profile_txt">Login </span>
                    </span>
                </Link>

                <Link>

                    <span className="nav_checkout">
                        <img src="./images/checkout1.png" alt="wishlist" style={{ marginLeft: "690px" }} />
                        <span className="checkout_txt">Checkout </span>
                    </span>
                </Link>

                <Link>
                    <span className="nav_wishlist">
                        <img src="./images/wishlist.png" alt="wishlist" style={{ marginLeft: "550px" }} />
                        <span className="wishlist_txt">My Wishlist </span>
                    </span>
                </Link>
            </div>



            <div className="nav_main">
                <Link to="home">
                    <div className="main_logo">
                        <img src="/images/main_logo.png" alt="main_logo" />
                    </div>
                </Link>
                
                <div className="Links">
                    <ul>
                        {/* <Link to="home"><li>Home</li></Link> */}
                        <Link to="home"><li>Home</li></Link>
                        <Link to="#"><li>Shop</li></Link>
                        <Link to="#"><li>Blog</li></Link>
                        <Link to="#"><li>Contact Us</li></Link>
                        <Link to="#"><li>About Us</li></Link>
                    </ul>
                    <span className="nav_line">____________________________________________________________________________________________________________</span>
                    <span className="Search_input" >

                        <input type="text" placeholder="Search Products"></input>

                        <Link> <img src="./images/search.png" alt="search" />  </Link>
                    </span>

                    <span className="Select_Category" >
                        <input type="text" placeholder="Select Category"></input>
                        <Link> <img src="./images/downside.png" alt="downside" /></Link>
                    </span>

                    <span className="strect_line">
                        |
                    </span>

                    <Link to="cartpage">
                        <span className="cart_img">
                            <img src="./images/cart.png" alt="cart" />
                        </span>
                    </Link>


                </div>
            </div>
        </div>

          


        </>

    )
}

export default Header;
