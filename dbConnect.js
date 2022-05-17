const mongoose = require('mongoose')
const URL ='mongodb+srv://Amandeep:ramkrishan12@cluster0.hbmnn.mongodb.net/sheypos'
mongoose.connect(URL)
let connectionObj =mongoose.connection
connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})
connectionObj.on('error', ()=>{
    console.log('Mongo DB Connection Failed');
})