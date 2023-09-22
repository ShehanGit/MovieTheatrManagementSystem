import React, {useState} from "react";
import axios from "axios";
import mainp from './Images/main.jpeg';
import pic1 from './Images/p1.jpeg'
import pic2 from './Images/p2.jpeg';
import pic3 from './Images/p3.jpeg';
import pic4 from './Images/p4.jpeg';
import pic5 from './Images/p5.jpeg';


export default function HomeMain(){
  
    return(
        <div>
        <div className="cont">
            <div className="cont1">
                <h1 className="h1">Avatar :</h1>
                <h1 className="h1">The way of water</h1>
            </div>
            <div className="cont2">
                <img className="ima" src={mainp} alt="My Image" width="95%" height= "100%" />
            
            </div>
        </div>

        <div className="contn">
            
            <div className="contn1">          
            <img className="ima1" src={pic1} alt="My Image" width="95%" height= "100%" />
            <h3 className="h3">Oppenheimer</h3>
            </div>
            <div className="contn1">
            <img className="ima1" src={pic5} alt="My Image" width="95%" height= "100%" />
            <h3 className="h3">The Little Mermaid </h3> 
            </div>
            <div className="contn1">
            <img className="ima1" src={pic3} alt="My Image" width="95%" height= "100%" />
            <h3 className="h3">Spider-man </h3>
            </div>
            <div className="contn1">
            <img className="ima1" src={pic4} alt="My Image" width="95%" height= "100%" />
            <h3 className="h3">Guardian of the galaxy</h3>
            </div>
            <div className="contn1">
            <img className="ima1" src={pic2} alt="My Image" width="95%" height= "100%" />
            <h3 className="h3">Fast X</h3>
            </div>

        </div>

        </div>

       
    )
}

