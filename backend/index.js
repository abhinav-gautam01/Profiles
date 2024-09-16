const express = require("express");
require('dotenv').config()
const { profile } = require("./db");
const { CreateProfile } = require("./type");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/data", async function (req,res){
    const profiles = await  profile.find();
    res.json({
        profiles
    })
})


app.post("/add", async function(req,res){
    const payLoad = req.body;
    const parsedpayLoad= CreateProfile.safeParse(payLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: "enterd wrong input"
        })
        return;
    }

    await profile.create({
        name: payLoad.name,
        description: payLoad.description,
        twitter: payLoad.twitter,
        linkedin: payLoad.linkedin
    })

    res.json({
        msg: "profile created"
    })
})








app.listen(3000,()=>{
    console.log(" server is started");
});