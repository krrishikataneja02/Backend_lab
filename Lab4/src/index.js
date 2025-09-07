import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})


import connectDB from "./DB/DBConnection.js";
import { app } from "./app.js";




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongodb connection failed",err);
})