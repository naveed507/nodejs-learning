import mongoose from "mongoose";
const connectDataBase = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS  = {
            dbName : 'finance',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully")
    } catch (error) {
        console.log("Not Connected"+ error)
        
    }
}
export default connectDataBase;