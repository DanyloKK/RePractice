const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const connect = mongoose.connect("mongodb+srv://domik12560:Kuzka2001@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
connect.then(()=>(console.log("Server Logged")))
app.use(cors());
app.use(express.json());
app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});