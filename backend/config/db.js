
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const dbConnect = async() => {
    try{
        await mongoose.connect(process.env.Mongo_url)
        console.log("DB Connected successfully")

    }catch(error){
        console.log("Error connecting db -> ", error)
    }
}

