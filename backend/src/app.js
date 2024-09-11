import  express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import expenseRoute from "./routes/expense.route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use('/api/user',userRouter)
app.use('/api/expense',expenseRoute)


app.get('/',(req,res)=>{
    res.send("hello")
})





export {app}