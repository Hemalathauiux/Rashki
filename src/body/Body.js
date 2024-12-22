import React, { Component } from "react";
import "../body/Body.css";




class Body extends Component {
  render() {

    return (
      <>
        <div class="grid">
          <div class="grid-row">
            <img class="w-75" src={require("../assets/Images/Screenshot 2024-10-28 115428.png")} alt="" />
            <h5 class="Bag1">Aria Laptop Bag</h5>
            <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
            <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
            <p class="percent">50% Off</p>
            <button type="button" class="button">Primary</button>

          </div>
          <div class="grid-row1">
            <img class="w-75" src={require("../assets/Images/Screenshot 2024-10-28 115437.png")} alt="" />
            <h5 class="Bag"  >Fero</h5>
            <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
            <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
            <p class="percent">50% Off</p>
            <button type="button" class="button">Primary</button>

          </div>
          <div class="grid-row2">
            <img class="w-75" src={require("../assets/Images/Screenshot 2024-10-28 115458.png")} alt="" />
            <h5 class="Bag" >Eden</h5>
            <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
            <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
            <p class="percent">50% Off</p>
            <button type="button" class="button">Primary</button>

          </div>
          <div class="grid-row3">
            <img class="w-75" src={require("../assets/Images/Screenshot 2024-10-28 115507.png")} alt="" />
            <h5 class="Bag">Renn</h5>
            <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> 103 Reviews
            <h6 class="cost">Rs.900 <span> <strike>Rs.1200</strike></span>  </h6>
            <p class="percent">50% Off</p>
            <button type="button" class="button">Primary</button>

          </div>
        </div>
        <h6 class="View">VIEW ALL PRODUCTS</h6>


      </>

    )
  }
}






export default Body;