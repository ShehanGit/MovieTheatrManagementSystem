import React, {useState} from "react";
import axios from "axios";


export default function AddStudent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function SendData(e){      
        e.preventDefault();

        const newStudent = {
            name,
            age,
            gender
        }
    
        axios.post("http://localhost:8086/Student/add", newStudent).then(()=>{
          alert("Student added");
        }).catch((err)=>{
          alert(err)
        })
    }
  
    return(
    <div className="container" >
        <br/>
        <br/>
        <form onSubmit = {SendData}>
  <div class="mb-3">
    <label for="name" class="form-label">Student Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>{
            setName(e.target.value);
    }}/>
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Student Age</label>
    <input type="text" class="form-control" id="age" onChange={(e)=>{
            setAge(e.target.value);
    }}/>
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Student Gender</label>
    <input type="text" class="form-control" id="gender" onChange={(e)=>{
            setGender(e.target.value);
    }}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    )
}


