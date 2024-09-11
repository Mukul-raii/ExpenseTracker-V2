import asyncHandler from '../utils/asyncHandler.js'
import apiError from '../utils/apiError.js'
import apiResponse from '../utils/apiResonse.js'
import {User} from '../models/user.model.js'



const signup=  asyncHandler(async (req,res)=>{
const {name,email,password}=req.body
if(!(name || email || password)){
    throw new apiError(400,"All fields are required")
}

const userExist=await User.findOne({email})
if(userExist){
    throw new apiError(400,"User already exist",Error)
}

const user=await User.create({
    name,
    email,
    password

})

res.status(200).json(new apiResponse(200,"User created successfully",user))


})


const login=asyncHandler(async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        throw new apiError(400,"All fields are required")
    }

    const user=await User.findOne({email})
    if(!user){
        throw new apiError(400,"User not found",Error)
    }

    const isPasswordCorrect=await user.isPasswordCorrect(password)
    if(!isPasswordCorrect){
        throw new apiError(400,"Incorrect password",Error)
    }
    
        const token= await user.generateAccessTokens()
        console.log(token);
        
        const option={
            httpOnly:true,
            expires:new Date(Date.now()+ 3*24*60*60*1000),
            secure:false,
            sameSite:"none"
        }

    res.cookie("access_token",token,option).json(new apiResponse(200,"User logged in successfully",user))

})





export {signup,login}