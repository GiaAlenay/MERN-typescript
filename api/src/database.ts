import mongoose from "mongoose";
mongoose.set("strictQuery", false);
(async()=>{
    try {
        const db= await mongoose.connect('mongodb://localhost/videos');
    console.log('database is connected to: ',db.connection.name)
        
    } catch (error) {
        console.log(error)
    }
})()