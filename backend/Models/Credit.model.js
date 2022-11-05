import mongoose from "mongoose";

const credit = new mongoose.Schema(
    {
        method:{
            type: String
        },
        amount:{
            type: String
        },
        cardno:{
            type: String
        },
        cvv:{
            type: String
        },
        expire:{
            type: String
        },
    }
)

export default mongoose.model("credit", credit)