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
            type: String
        },
        endtime:{
            type: String
        }
    }
)

export default mongoose.model("timetable", timetable)