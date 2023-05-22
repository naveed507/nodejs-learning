import mongoose from "mongoose";
import passportLocalMongoose  from 'passport-local-mongoose';



//Defining Schema

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema =new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{
        type:String, 
        required:"Email address is required",
         trim:true, 
         unique:true,
         lowercase:true,
         validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    password:{
        type:String,
        required:"Password is required",
        trim:true,
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

userSchema.plugin(passportLocalMongoose)
const UserModel = mongoose.model("userData",userSchema, 'userData');
export default UserModel;