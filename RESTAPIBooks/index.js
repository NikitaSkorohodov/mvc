const express = require("express");
const cors = require("cors")
const app = express();
 
app.use(cors())
// определяем роутеры
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.json({message:"welcome"})
})