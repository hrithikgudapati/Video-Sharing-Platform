let express = require("express");
let app=express()
let mongoose = require('mongoose');

mongoose.connect("mongodb+srv://amolg417:T4bYwzfIrHcRcYlZ@cluster0.qlwnwu0.mongodb.net/?retryWrites=true&w=majority", { dbName: "VideoSharingDataBase" })
    .then(() => console.log("DataBase is Connected"))
    .catch((err) => console.log("Failed to Connect", err))

app.get('/home', (req, res) => {
    res.json({
        message: "welcome to video sharing platform"
    })
})


app.listen(8000, () => {
    console.log("App is Running")
})