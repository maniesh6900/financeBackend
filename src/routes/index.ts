import { Router } from "express";
const router = Router();
import client from  "../db/model"
 

router.route("/transitions").get( async (req, res)=>{
    const data = await client.find()
    res
    .status(200)
    .json({data, success : true})
})

router.route("/transitions").post( async (req, res)=>{
    const {catagory, date, amount, description} = req.body

    const parsedData =  await client.create({
        catagory,
        date,
        amount,
        description
    })
    if(!parsedData) {
        throw new Error("An Error Occour")
    }
    res
    .status(201)
    .json({
        parsedData, 
        success : true
    })
})

router.route("/transitions").delete( async (req, res)=>{
    const {id} = req.body

    const data = await client.findByIdAndDelete(id)
    if(!data){
        throw new Error("An Error Occour")
    }
    res.status(200).json({
        success : true,
        message : "data deleted"
    })
})




export default router