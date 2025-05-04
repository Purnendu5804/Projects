/* 
 todo {
    title : string,
    description : string,
    completed : boolean
 }
*/

const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://purnendutiwari2004:sKBadUBSZSF0rbf9@cluster0.di26a.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}