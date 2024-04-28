import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("MongoDb connected")
        }
    } catch {
        console.log(error);
    }
}

export default connectDb;