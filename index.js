// const path = require("path");
const express = require("express");
const PORT = 4000;
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(expressSession({ secret: "Keyboard cat "}));
app.use(express.static("public"));
app.set("view engine", "ejs");
global.loggedIn = null;
app.use("*",(req,res,next)=>{
   loggedIn = req.session.userId;
  next()
})

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// All Middleware
const validateMiddleWare = require("./middleware/validationMiddleware");
const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");

// Mongoose Connection

mongoose.connect("mongodb+srv://codertushar:tushar1906@cluster0.xxho5de.mongodb.net/Nodejs_Book", { useNewUrlParser: true })
.then(() => {console.log("Mongodb Connected with Database");})
.catch(() => {console.log("Cannot Connected with Database");
});



// Routing
const homeController = require("./controller/home");
app.get("/", homeController);

const storePostController = require("./controller/storePost");
app.post("/posts/store", authMiddleware, storePostController);

const getPostController = require("./controller/getPost");
app.get("/post/:id", getPostController);

const newPostController = require("./controller/newPost");
app.get("/posts/new", authMiddleware, newPostController);

const newUserController = require("./controller/newUser");
app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);

const storeUserController = require("./controller/storeUser");
app.post( "/user/register", redirectIfAuthenticatedMiddleware, storeUserController);

const loginController = require("./controller/login");
app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);

const loginUserController = require("./controller/loginUser");
app.post("/user/login", redirectIfAuthenticatedMiddleware, loginUserController);

const logoutController = require('./controller/logout')
app.get('/auth/logout',logoutController)    

// 404 Page Not Found
app.use((req,res)=> res.render('notfound'))

