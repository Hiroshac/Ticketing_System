import express from "express"
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import invalidtokenrouter from "./Routes/InvalidToken.routes.js";
import timetablerouter from "./Routes/TimeTable.route.js";
import rootrouter from "./Routes/Route.route.js";
import inspectorroute from "./Routes/AllocateInspector.route.js";
import publicmanagerroute from "./Routes/PublicManager.route.js";
import inspectroute from "./Routes/Inspector.route.js";
import auth from './Routes/auth.routes.js';

//middleware
const app = express();
app.use(express.json())
app.use(cors())

//routes
app.use("/auth", auth);
app.use("/invalidtoken", invalidtokenrouter);
app.use("/timetable", timetablerouter)
app.use("/root", rootrouter)
app.use("/allocate", inspectorroute)
app.use("/manager", publicmanagerroute)
app.use("/inspector", inspectroute)


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

  //when disconnect port
mongoose.connection.on('disconnected',()=>{
    console.log("mongo db disconnected");
}
)