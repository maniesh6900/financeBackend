import { connectmongoose } from "./db";
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config({
    path : "./.env"
})


connectmongoose()
.then(()=>{
    app.listen(3000,()=>{  
        console.log(`server is running on PORT : ${3000}`); 
    });
})
.catch((error)=>{
    console.error(error);
    
})