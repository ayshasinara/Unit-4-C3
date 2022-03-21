const mongoose= require("mongoose");
const connect =()=>{
    return mongoose.connect("mongodb+srv://ayshasinara:A3011998.s@cluster0.ss76k.mongodb.net/books?retryWrites=true&w=majority")
}
module.exports=connect