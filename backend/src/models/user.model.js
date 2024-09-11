
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  
})

userSchema.pre('save', async function (next) {
    this.password=await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password) {
   return await bcrypt.compare(password, this.password)

 
}

userSchema.methods.generateAccessTokens = async function () {
        return jwt.sign({
            _id: this._id,
            name: this.name,
            email: this.email}, process.env.ACCESS_SECRET, {expiresIn: '2h'});

}

export const User = mongoose.model('user', userSchema);
