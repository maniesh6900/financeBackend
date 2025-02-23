import express from "express"
const app = express();
import transitionsRouter from './routes/index'
import cors from "cors" 

app.use(cors())

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))

app.use("/api", transitionsRouter)

export {app}