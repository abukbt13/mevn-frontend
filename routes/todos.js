
const express= require('express')

const router=express.Router()

const mongoose = require('mongoose')

const Todo = require('../model/todo')

router.get('/',async (req, res) => {
   const todos=await Todo.find()
    res.json(todos)
})
//Save a new To do
router.post('/new',async (req, res) => {
    const newTodo = new Todo(
        req.body
    )
    const savedTodo= await newTodo.save()
    res.json(savedTodo)
})
// Find a todo by id id
router.get('/get/:id',async (req, res) => {
    const t=await Todo.findById({_id:req.params.id})
    res.json(t)
})
router.delete('/delete/:id',async (req,res) => {
    const deletee=await Todo.findByIdAndDelete({_id:req.params.id})

})

router.put('/update/:id',async (req,res) => {
    const tupdate = await Todo.updateOne(
        {_id:req.params.id},
    { $set : req.body}
    );
    res.json(tupdate)
})

module.exports = router