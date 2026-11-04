import express from "express"
import { login, logout, me } from "../controllers/auth.controller"
import { protect } from "../middleware/protect"

const authRouter = express.Router()

authRouter.post("/login", login)
authRouter.post("/logout", logout)
authRouter.post("/me", protect ,me)


export default authRouter