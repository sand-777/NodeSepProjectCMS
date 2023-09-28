const express = require('express')
const { blogs } = require('./model/index')
const app = express()

// database connection
require("./model/index")

// telling the nodejs to set view engine to ejs

app.set("view engine","ejs")

//form bata data aairaxa parse gara or handle gara vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//all blog
app.get("/",async (req,res)=>{
    // blogs vanne table bata vaye jati sabai data dey
    const allBlogs = await blogs.findAll() 
    console.log(allBlogs)

    //blogs vanney key/name ma allBlogs/data pass gareko ejs file lai
    res.render('blogs',{blogs:allBlogs})
})



//createBog
app.get("/createBlog",(req,res)=>{
    res.render("createBlog")
})

//createBlog Post
app.post("/createBlog",async (req,res)=>{
    //first approach
    const title = req.body.title
    const description = req.body.description
    const subTitle = req.body.subtitle
   
    //database ma halnu paryo
   await blogs.create({
        title: title,
        subTitle: subTitle,
        description: description
    })
    //second approach
    

    //database ma halnu paryo

    res.redirect("/")
})



//database/table bata data kasari nikalney


app.listen(3000,()=>{
    console.log("NodJs project has started at port 3000")
})