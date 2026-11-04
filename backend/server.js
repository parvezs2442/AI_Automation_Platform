import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { dbConnect } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
dotenv.config();

const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookieParser())


app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    dbConnect()
    console.log(`App is listening at PORT - ${PORT}`)
})


