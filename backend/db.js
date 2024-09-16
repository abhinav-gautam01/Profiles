const mongoose = require("mongoose");
require('dotenv').config();
const { string } = require("zod");

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("db connected");
})

const profileSchema = mongoose.Schema({
    name: String,
    description: String,
    twitter: String,
    linkedin: String

})

const profile = mongoose.model('profiles',profileSchema);
module.exports={
    profile
}