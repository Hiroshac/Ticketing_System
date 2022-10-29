import mongoose from "mongoose";

const invalidtoken = new mongoose.Schema(
    {
        inspectorid:{
            type: String
        },
        date:{
            type: String
        },
        count:{
            type: Number
        },
        route:{
            type: String
        },
        reason:{
            type: String
        },
    }
)

export default mongoose.model("invalidtokens", invalidtoken)