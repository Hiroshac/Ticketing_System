import mongoose from "mongoose";

const publicmanager = new mongoose.Schema(
    {
        managerid:{
            type: String
        },
        name:{
            type: String
        }
    }
)

export default mongoose.model("publicmanager", publicmanager)