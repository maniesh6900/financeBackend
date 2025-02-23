import mangoose,{Schema} from "mongoose"

const reportSchema = new Schema({
    amount : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    catagory : {
        type : String,
        required: true
    },
    
})

const clintInfo = mangoose.model('clientInfo',reportSchema)

export default clintInfo
