import express from "express"
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import invalidtokenrouter from "./Routes/InvalidToken.routes.js";
import timetablerouter from "./Routes/TimeTable.route.js";

const app = express();

app.use(express())
app.use(cors())
app.use("/invalidtoken", invalidtokenrouter);
app.use("timetable", timetablerouter)

const port = process.env.PORT || 5000
dotenv.config();

//establish db connection
const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGOURL).then(()=>{
            console.log("Successfully connected to mongo db");
        })
    }
    catch(err){
        throw err;
    }
}

//connect the port
app.listen(port, () => {
    connect();
    console.log(`Server is running on port: ${port}`)
  })

mongoose.connection.on('disconnected',()=>{
    console.log("mongo db disconnected");
}
)