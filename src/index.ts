import express from "express";
import type{Request,Response} from 'express'
import cors from "cors";
import dotenv from 'dotenv';
import {errorHandler,routeNotFound} from "./middleware/errorMiddleware"
import authRoutes from "./routes/authRoutes"
import classRoutes from "./routes/classRoutes"
import attendanceRoutes from "./routes/attendanceRoutes"

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api",authRoutes);
app.use("/api",classRoutes);
app.use("/api",attendanceRoutes);

app.get("/",(req: Request,res:Response)=>{
    res.status(200).json({message:"hey there"});
})

app.use(routeNotFound);
app.use(errorHandler);

const port:number=parseInt(process.env.PORT as string,10)||4000;

if(process.env.NODE_ENV==='dev'&&false){
    const hostname="192.168.29.33"
app.listen(port,hostname,()=>{
    console.log(`Server is running on ${hostname}:${port}`);
    
})
}else{
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`);
        
    })  
}


app.on('error', (error:any) => console.error(error))