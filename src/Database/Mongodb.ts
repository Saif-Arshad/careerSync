import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        
        await mongoose.connect(process.env.MONGODB_URI?? "");
        console.log("Database connected successfully");
        isConnected = true;
    } catch (error) {
        console.log("Error while connecting with the database", error);
    }
}
// process.env.MONGODB_URI ?? 
// 'mongodb://127.0.0.1:27017/Authentication'
export default connectDb;