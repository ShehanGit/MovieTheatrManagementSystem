const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

const Student_routes = require('./routes/Students')
//const todo_routes = require('./routes/todo.route')

const PORT = process.env.PORT || 8086;

app.use(cors())
app.use(bodyParser.json())

const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection
connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})

// routes
 app.use('/Student', Student_routes)//
 
// app.use('/todo', todo_routes)

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`)
})

