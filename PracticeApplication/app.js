import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Authenticatio Configuration
import session from 'express-session';
import passport from 'passport';


//Import some necessary files
import {join} from 'path'
import web from './routes/web.js';
import connectDataBase from './database/connectDataBase.js';
import User from './models/userModel.js';






//DataBase Configuration 
const port = process.env.PORT || '3000' 
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectDataBase(DATABASE_URL);
app.use(urlencodedParser);
app.use(passport.initialize());
app.use(session({
    secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/',express.static(join(process.cwd(), "public")))

app.set("view engine", "ejs")
app.use("/", web)
app.listen(port, ()=>{
    console.log(`Server Listening at port  http://localhost:${port}`)
})