const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    'todos':String,
    'author':String,
    'age':Number
})

module.exports =mongoose.model('todo',TodoSchema)