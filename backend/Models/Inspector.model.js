import mongoose from "mongoose";

const inspector = new mongoose.Schema(
    {
        inspectorid:{
            type: String
        },
        name:{
            type: String
        }
    }
)

export default mongoose.model("inspector", inspector)