import {app } from "./app.js"
import connectDB from "./db/db.js"
import dotenv from 'dotenv';
dotenv.config(
    {path:'../.env'}
);

connectDB().then(() => {
    
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
}).catch((err) => {
    console.log(err)
});



