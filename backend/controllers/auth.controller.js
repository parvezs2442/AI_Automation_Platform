import { getAuth } from "firebase-admin/auth"
import { app } from "../config/firebase.js"
import User from "../model/user.model.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()


export const login = async (req, res) => {
  try {
    const { token:firebaseToken } = req.body;
    if (!firebaseToken) {
      return res.status(400).json({
        success: false,
        message: "Token not found",
      });
    }

    // get the user details from frontend using token
    const decoded = getAuth(app).verifyIdToken(firebaseToken)

    //create user if user is not registered
    const user = await User.findOneAndUpdate(
        {firebaseUid:decoded.uid}, //if user exists
        {
            $set:{
                name:decoded.name,
                email:(await decoded).email,
                profilePicture:decoded.profilePicture
            },
            $setOnInsert:{
                firebaseUid:decoded.uid
            }
        },
        {
            upsert:true,
            returnDocument:"after"
        }
    )

    //token & cookies creation

    const token = jwt.sign(
        {userId:user._id},
        process.env.JWT_SECRET,
        {
            expiresIn:"7d"
        }
    )

    res.cookie("token", token, {
        maxAge: 7*24*60*60*1000,
        httpOnly:"true",
        secure:false,
        sameSite:"strict"
    })

    return res.status(200).json({
        success:true,
        message:"user Logged in",
        user
    })
  

  } catch (error) {
    console.log("Login error", error)
    return res.status(400).json({
      success: false,
      message: "Login Failed",
    });
  }
};

export const logout = async(req,res) => {
    try{
        res.clearCookie("token",{
        maxAge: 7*24*60*60*1000,
        httpOnly:"true",
        secure:false,
        sameSite:"strict"
    })

    return res.status(200).json({
        success:true,
        message:"user Logged out",
    })

    }catch(error){
        console.log("logout error :", error)
            return res.status(400).json({
                success:false,
                message:"Logout failed"
            })
    }

}