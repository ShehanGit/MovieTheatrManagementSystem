import React, {useState, useEffect} from "react"
import axios from "axios";

export default function AllStudent(){

        const [students, setStudents] = useState([]); 
        useEffect(() => {
                function getStudent(){
                    axios.get("http://localhost:8086/Student/").then((res)=> {
                        console.log(res.data); 
                        //setStudents(res.data);
                    }).catch((err) => {
                        alert(err.message);
                    })
                } 
         getStudent();
        }, [])


    return(
        <div>
            <h1>All Student</h1>
        </div>

    )
} 
