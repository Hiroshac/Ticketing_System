import mongoose from "mongoose";

    const routes = new mongoose.Schema({
        routes: [{
            type: String
        }]
    })

export default mongoose.model("routes", routes)