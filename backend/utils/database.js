import mongoose from 'mongoose';
const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}
export default databaseConnection;