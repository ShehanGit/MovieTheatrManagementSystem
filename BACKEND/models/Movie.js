const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema(
    {
        name :{ 
            type : String,
            required : true
        },

        age:{ 
            type : Number,
            required:true
        },

        gender:{ 
            type : String,
            //required:true
        },

})

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
