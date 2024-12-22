import React, { Component } from "react";
import "../Footer/Footer.css";



class Footer extends Component{
    render(){

        return(
<>
<div className="know">
<p>We understand that you have a lot on your plate, together let’s #accomplishmore</p>
<h6>KNOW MORE</h6>
</div>

<div className="know1">
    <h3>WE HAVE SOME NEWS!</h3>
</div>
<div className="logo">
<img  src={require("../assets/Images/logo1.avif")} alt=""/>

<img  src={require("../assets/Images/logo2.avif")} alt=""/>

<img src={require("../assets/Images/logo3.avif")} alt=""/>

<img src={require("../assets/Images/logo4.avif")} alt=""/>

<img src={require("../assets/Images/logo5.avif")} alt=""/>

<img src={require("../assets/Images/logo6.avif")} alt=""/>
</div>

<h4 className="deliver">DELIVERING MORE</h4>

<div className="icons">
    <div className="icon1">
<img className="w-25" src={require("../assets/Images/exchange.webp")} alt=""/>
<h6>6 months warranty</h6>
</div>
<div className="icon1">
<img className="w-25" src={require("../assets/Images/free shipping.webp")} alt=""/>
<h6>Free shipping</h6>
</div>
<div className="icon1">
<img className="w-25" src={require("../assets/Images/free2.webp")} alt=""/>
<h6>Easy Returns</h6>
</div>
<div className="icon1">
<img className="w-25" src={require("../assets/Images/free3.webp")} alt=""/>
<h6>Secure checkouts</h6>
</div>


</div>


<hr></hr>

<div className="service">
<h5>CUSTOMER SERVICE</h5>
<p>Shipping & Delivery Policy</p>
<p>Return, Exchange and Refunds policy for Bags</p>
<p>Return, Exchange and Refunds policy for heels</p>
<p>Privacy Policy</p>
<p>Color Variation and Wear Tear</p>
<p>Terms of Service</p>
<p>Intellectual Property & Trademarks</p>
<p>Contact Us</p>
</div>

<div className="Un">
© Rashki<br></br>
Design by Hema
</div>



</>



        )
    }
}

export default Footer;