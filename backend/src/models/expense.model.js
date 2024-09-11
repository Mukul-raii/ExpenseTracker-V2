import mongoose from "mongoose";

const expenseSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:["Groceries","Leisure","Electronics","Utilities","Clothing","Health","Others"],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

})


export const Expense = mongoose.model('expense',expenseSchema);
