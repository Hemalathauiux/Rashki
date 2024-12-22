import React, { Component } from "react";
import "../Navbar/Navbar.css";





class Navbar extends Component {
  render() {
   
    return (
      <>
      <div className="container1">
        <p>FESTIVE HAMPERS WITH ALL ORDERS ABOVE ₹1890 |FREE SHIPPING</p>

      </div>



      <div className="container-fluid">
        <h3>RASHKI <i class="fa-solid fa-bars"></i> </h3>
        <img class="w-100"src={require ("../assets/Images/Screenshot 2024-10-28 115326.png")} alt=""/>
        <h3 class="Head">HERE’S WHATS HAPPENING</h3>
        <img class="w-100"src={require ("../assets/Images/Screenshot 2024-10-28 115342.png")} alt=""/>
      </div>


   
   <div class="grid">
    <div class="grid-row">
    <img class="w-75"src={require ("../assets/Images/Screenshot 2024-10-28 115409.png")} alt=""/>
    <h5 class="Bag1">Aria Laptop Bag</h5>
    <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
    <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
    <p class="percent">50% Off</p>
    <button type="button" class="button">Primary</button>
    
    </div>
    <div class="grid-row1">
    <img class="w-75"src={require ("../assets/Images/Screenshot 2024-10-28 115451.png")} alt=""/>
    <h5 class="Bag"  >Fero</h5>
    <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
    <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
    <p class="percent">50% Off</p>
    <button type="button" class="button">Primary</button>
    
    </div>
    <div class="grid-row2">
    <img class="w-75"src={require ("../assets/Images/Screenshot 2024-10-28 115514.png")} alt=""/>
   <h5 class="Bag" >Eden</h5>
   <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
    <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
    <p class="percent">50% Off</p>
    <button type="button" class="button">Primary</button>
    
    </div>
    <div class="grid-row3">
    <img class="w-75"src={require ("../assets/Images/Screenshot 2024-10-28 115420.png")} alt=""/>
    <h5 class="Bag">Renn</h5>
    <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
    <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
    <p class="percent">50% Off</p>
    <button type="button" class="button">Primary</button>
    
    </div>
    </div>
    
    


        

      </>
    );
  }
}

export default Navbar;