
import express from "express"
import dotenv from "dotenv"
import { dbConnect } from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());

await dbConnect()

app.listen(PORT, () => {
    console.log(`App is listening at PORT - ${PORT}`)
})


