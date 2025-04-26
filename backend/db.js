require('dotenv').config();

const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log('error connecting to mongodb',err));
const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

const todo=mongoose.model('todo',todoschema);

module.exports={
    todo
}
