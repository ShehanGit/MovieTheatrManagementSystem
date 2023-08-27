const router = require("express").Router();


let Movie = require("../models/Movie");



//Add student details
router.route("/addMovie").post((req, res) => {

    const title = req.body.title;
    const genre = req.body.genre;
    const director = req.body.director;
    const releaseDate = req.body.releaseDate;
    const languages = req.body.languages;
    const runtime = req.body.runtime;
    const Rating = req.body.Rating;

    const newStudent = new Movie (
        {
            title,
            genre,
            director,
            releaseDate,
            languages,
            runtime,
            Rating,
        })
    newStudent.save().then(()=>{
        res.json("Movie Added")
    }).catch((err)=>{
        console.log(err);
    })
})
//http://localhost:8080/add

module.exports = router;

