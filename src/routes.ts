import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from './middleware/validateResource'; 
import { createUserSchema } from "./schema/user.schema";

export default function(app:Express){
    app.get("/healthCheck",(req:Request, res:Response)=>
    {
        res.sendStatus(200);
    })

    app.post("/api/users", validateResource(createUserSchema), createUserHandler);
}