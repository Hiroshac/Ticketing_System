import mongoose from "mongoose";

const allocateinspector = new mongoose.Schema(
    {
        inspectorid:{
            type: String
        },
        date:{
            type: String
        },
        route:{
            type: String
        },
    }
)

export default mongoose.model("allocateinspector", allocateinspector)