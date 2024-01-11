import { Link } from "react-router-dom";
 

const Home=()=>{

    return(
        <>
        <div className="scoll_images">
        <div className="images">

        </div>
    </div>


    <section className="best_seller">
        <span>Best Sellers</span>
        <Link>
            <div id="item_1">
                <img src="./images/i phone 13.png" alt="iphone" />
                <span>I phone 13 <br /> Best Offers </span>
            </div>
        </Link>

        <div id="item_2">
            <img src="./images/Galaxy.png" alt="poco" />
            <span>Samsung s23 ultra <br /> Best Offers </span>
        </div>


        <div id="item_3">
            <img src="./images/pocoX3.png" alt="poco" />
            <span> Poco X3  <br /> Best Offers </span>
        </div>

    </section>


    <section className="Offer">
          
    <img src="./images/offers.png" alt="poco" />
            
    </section>
        </>
    )
}

export default Home;