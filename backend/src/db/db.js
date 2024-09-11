import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const db_instance=await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection host =:",db_instance.connection.host);

    } catch (error) {
        console.log("Database Connection Error",error)
    }
}

export default connectDB;
