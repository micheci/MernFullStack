const express=require('express')
const router=express.Router();
const Task=require('../models/Task')

router.post("/",async (req,res)=>{
    const newTask=new Task(req.body)
    try {
        const savedTask=await newTask.save();
        res.status(200).json(savedTask)
        console.log('added to db')
    } catch (error) {
        res.status(500).json(error)
        console.log('failed to add to db')
    }
})
router.get("/",async (req,res)=>{
    
    try {
        const taskList= await Task.find({})
        res.status(200).json(taskList)
        console.log('retrieved task!')
    } catch (error) {
        res.status(500).json(error)
        console.log('failed to get to db')
    }
})
router.put("/:id",async (req,res)=>{
    
    try {
        const modTask=await Task.findById(req.params.id)
        modTask.completed=!modTask.completed;
        modTask.save();
        res.status(200).json(modTask)
        console.log('succese update')
    } catch (error) {
        res.status(500).json(error)
        console.log('failed to update db')
    }
})
router.delete("/:id",async (req,res)=>{
    
    try {
        const delTask=await Task.findByIdAndDelete(req.params.id)
       
        res.status(200).json(delTask)
        console.log(delTask)
    } catch (error) {
        res.status(500).json(error)
        console.log('failed to delete db')
    }
})
router.patch("/:id",async (req,res)=>{
    
    try {
        const putTask=await Task.findOneAndUpdate({_id: req.params.id}, {
            taskName:req.body.taskName
          })
       
        res.status(200).json(putTask)
        console.log(putTask)
    } catch (error) {
        res.status(500).json(error)
        console.log('failed to delete db')
    }
})

module.exports=router