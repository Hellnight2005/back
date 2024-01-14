import mongoose from "mongoose";
// here import constants.js file into DB_NAME 
import { DB_NAME } from "C:\Users\Abhijeet\Desktop\Abhijeet\Back\back\Models-in-backend\src\constants.js";

const connectDB = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected ..!!! Hostname : ${ConnectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB Connection error", error);
        process.exit(1)
    }
}

export default connectDB