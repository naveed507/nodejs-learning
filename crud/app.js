import express from 'express'
import {join} from 'path'
import web from './routes/web.js'
import connectDB from './db/connectdb.js';
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
app.use(express.urlencoded({ extended: true })); 

//DataBase Connection
connectDB(DATABASE_URL);

//Static file configuration
app.use('/student',express.static(join(process.cwd(), "public")))

app.set("view engine", "ejs")
app.use("/student", web);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})