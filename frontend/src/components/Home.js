import React, {useState} from "react";
import axios from "axios";
import mainp from './Images/main.jpeg';


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

            </div>
            <div className="contn1">

            </div>
            <div className="contn1">

            </div>
            <div className="contn1">

            </div>
            <div className="contn1">

            </div>

        </div>

        </div>

       
    )
}

