import asyncHandler from '../utils/asyncHandler.js'
import apiError from '../utils/apiError.js'
import apiResponse from '../utils/apiResonse.js'

import  {Expense}  from '../models/expense.model.js'


const add=  asyncHandler(async (req,res)=>{
    const {title,Date,amount,category}=req.body
    if(!(title || Date || amount || category)){
        throw new apiError(400,"All fields are required")
    }

    const expense=await Expense.create({
        title,
        Date,
        amount,
        category,
        user:req.user._id
    })

    res.status(200).json(new apiResponse(200,"Expense created successfully",expense))

})

const remove= asyncHandler(async (req,res)=>{
    const {id}=req.body
    const loginuser=req.user

    if(!id){
        throw new apiError(400,"Expense id is required")
    }

    const expense=await Expense.findById(id)

    if(!expense){
        throw new apiError(400,"Expense not found")
    }

    if(loginuser._id.toString()!==expense.user.toString()){
        throw new apiError(400,"You are not authorized to delete this expense")
    }
    
   Expense.findOneAndDelete(id)
    res.status(200).json(new apiResponse(200,"Expense deleted successfully"))
})

const update= asyncHandler(async (req,res)=>{
    const {id,title,Date,amount,category}=req.body
    const loginuser=req.user

    if(!id){
        throw new apiError(400,"Expense id is required")
    }

    if(!loginuser){
        throw new apiError(400,"User not found")
    }
 
    const expense=await Expense.findById(id)

    if(!expense){
        throw new apiError(400,"Expense not found")
    }

const expenseUpdate=await Expense.findByIdAndUpdate(id,{title,Date,amount,category},{new:true})

res.status(200).json(new apiResponse(200,"Expense updated successfully",expenseUpdate))

})


const view= asyncHandler(async (req,res)=>{
    const loginuser=req.user
    const expenses=await Expense.find({user:loginuser._id})
    res.status(200).json(new apiResponse(200,"Expense fetched successfully",expenses))
})

export {add,remove,update,view}