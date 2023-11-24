import express from "express";
import type{Request,Response} from 'express'
import cors from "cors";
import dotenv from 'dotenv';
import {errorHandler,routeNotFound} from "./middleware/errorMiddleware"
import authRoutes from "./routes/authRoutes"

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api",authRoutes)

app.get("/",(req: Request,res:Response)=>{
    res.status(200).json({message:"hey there"});
})

app.use(routeNotFound);
app.use(errorHandler);
const port:number=parseInt(process.env.PORT as string,10)||4000;


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})

app.on('error', (error:any) => console.error(error))