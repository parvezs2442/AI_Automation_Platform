import { getAuth } from "firebase-admin/auth"
import { app } from "../config/firebase.js"
import User from "../model/user.model.js";

export const login = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token not found",
      });
    }

    // get the user details from frontend using token
    const decoded = getAuth(app).verifyIdToken(token)

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

    


  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Login Failed",
    });
  }
};
