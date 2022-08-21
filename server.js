var express = require("express"),
    cors    = require("cors")
    // bodyParser = require("body-parser")
const mongoose = require("mongoose")

var app = express()
const PORT = process.env.PORT || 5000

var exercisesRouter = require("./routes/exercises")
var usersRouter = require("./routes/users")


app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://sachin4219:Texas4holdem@cluster0.3ov0bjf.mongodb.net/Exercise-Tracker?retryWrites=true&w=majority";

// Configurations
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{app.listen(PORT,function(req,res){
    console.log("Connected & Listening on http://localhost:"+PORT)
})
})
    .catch((err)=> console.log(err));


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter)

