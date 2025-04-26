const express=require('express');
const {todo}=require('./db');
const { createTodo } = require('./type');
const app=express();

app.use(express.json());

app.post("/todo",async(req,res)=>{  //create a new todo
   const createpayload=req.body;
   const parsepayload=createTodo.safeParse(createpayload);
   if(!parsepayload.success){
        res.status(400).json({
        msg:"you sent wrong input",
    })
    return;
   }

   await todo.create({
    title:createpayload.title,
    description:createpayload.description,
    completed:false
   })
   res.status(201).json({
    msg:"todo created",
   })
})

app.get("/todos",async(req,res)=>{
    const todos=await todo.find();
    res.status(200),json({
        todos:todos,
        msg:"all todos",
    })
})

app.put("/completed",async (req,res)=>{
   const updatepayload=req.body;
   const parsepayload=createTodo.safeParse(updatepayload);
   if(!parsepayload.success){
        res.status(400).json({
        msg:"you sent wrong input",
    })
    return;
   }
   await todo.update({
        _id:updatepayload.id,
   },
   {
       completed:true,
  })
  res.status(200).json({
    msg:"todo marked as completed",
  })
})

app.listen(3000);