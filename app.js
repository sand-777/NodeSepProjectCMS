const express = require('express')
const app = express()

// database connection
require("./model/index")

// telling the nodejs to set view engine to ejs

app.set("view engine","ejs")

//form bata data aairaxa parse gara or handle gara vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//all blog
app.get("/",(req,res)=>{
    res.render("blogs")
})



//createBog
app.get("/createBlog",(req,res)=>{
    res.render("createBlog")
})

//createBlog Post
app.post("/createBlog",(req,res)=>{
    console.log(req.body.title) 
    res.send("form submitted successfully")
})




app.listen(3000,()=>{
    console.log("NodJs project has started at port 3000")
})