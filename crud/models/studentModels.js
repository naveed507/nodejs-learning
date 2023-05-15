import mongoose from "mongoose";


//Defining Schema

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18},
    fees:{type:mongoose.Decimal128, required:true, validate:(value)=> value >=1000.5}
})

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel ;