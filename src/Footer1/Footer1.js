import React, { Component } from "react";
import "../Footer1/Footer1.css";


class Footer1 extends Component {
    render() {
        return (
            <>
                {

                    <div className="container">


                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                                <img  src={require("../../src/assets/Images/main banner.jpg")} className=" w-50" alt="..." />
                               
                            </div>
                            <div className="carousel-item  ">
                                <img src={require("../../src/assets/Images/main baanner3.jpg")} className=" w-50" alt="..." />
                                
                            </div>
                            <div className="carousel-item ">
                                <img src={require("../../src/assets/Images/scrool img2.jpg")} className=" w-50" alt="..." />
                                
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>



                }

            </>



        );
    }
}



export default Footer1;