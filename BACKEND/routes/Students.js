const router = require("express").Router();

let Student = require("../models/Student");

//Add student details
router.route("/add").post((req, res) => {

    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Student (
        {
            name,
            age,
            gender
        })
    newStudent.save().then(()=>{
        res.json("student Added")
    }).catch((err)=>{
        console.log(err);
    })
})
//http://localhost:8080/add


//Get all student details
router.route("/").get((req, res)=>{
    Student.find().then((student) => {
        res.json(student)
    }).catch((err)=> {
        console.log(err)
    })
})

//Update student details
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { name, age, gender } = req.body;

    const updateStudent = {
        name,
        age,
        gender
    };

    try {
        const update = await Student.findByIdAndUpdate(userId, updateStudent);
        res.status(200).send({ status: "user updated" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" });
    }
});

//Delect student details  
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    try {
        await Student.findByIdAndDelete(userId);
        res.status(200).send({ status: "user deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting data" });
    }
});

//Get only one student details
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await Student.findById(userId)
    .then(() =>{
        res.status(200).send({status: "user fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message})
    })
})


module.exports = router;

