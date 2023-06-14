const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost')
            
mongoose.connect("mongodb://localhost/Nodejs_Book",{useNewUrlParser:true});
// BlogPost.create({
//     title:"Tushar",
//     body: "This is a nodejs Book "
// },(error,blogpost)=>{
//     // console.log(error,blogpost)
// })
