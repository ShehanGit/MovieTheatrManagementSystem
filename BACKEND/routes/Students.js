const router = require("express").Router();


let Movie = require("../models/Movie");



//Add student details
router.route("/addMovie").post((req, res) => {

    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Movie (
        {
            name,
            age,
            gender
        })
    newStudent.save().then(()=>{
        res.json("Movie Added")
    }).catch((err)=>{
        console.log(err);
    })
})
//http://localhost:8080/add




module.exports = router;

