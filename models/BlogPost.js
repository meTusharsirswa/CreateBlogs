const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    userid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    datePosted :{
        type:Date,
       defult : new Date()
    },
    image : String
})

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
        

// How to find a special data 
// BlogPost.find({
//     title: "Mountain"
// } ,(error,data)=>{console.log(error,data)})

// ----------------
// find with special charactor
// BlogPost.find({
//     title: /Title/},(error,data)=>{
//         console.log(error,data)
//     })

// ----------------------

// Reading data from MongoDb using Mongoose
// BlogPost.find({}, (error,blogpost)=>{
//     console.log(error, blogpost)
// })

// find by title name:-

// BlogPost.find({
//     title:/Tushar/},(error,blogpost)=>{
//         console.log(error, blogpost)
//     })


// Find by id mathod  
// var id = "646b5b7f3635af8a21a3d07b"
// BlogPost.findById(id,(data)=>{
//     console.log(data)
// })


// UPDATING RECORD

// var id = "646b5eb04f185ff4a390c0d6";
// BlogPost.findByIdAndUpdate(id,{title:'Updated'},(error,blogpost)=>{
//     console.log(error,blogpost)
// })

// Delete Single Record
// var id = "646b5eb04f185ff4a390c0d6";
// BlogPost.findByIdAndDelete(id,(data)=>{
//     console.log(data)
// })


module.exports = BlogPost