import mongoose from "mongoose";

const timetable = new mongoose.Schema(
    {
        orgin:{
            type: String
        },
        destination:{
            type: String
        },
        starttime:{
            type: Number
        },
        endtime:{
            type: Number
        }
    }
)

export default mongoose.model("timetable", timetable)