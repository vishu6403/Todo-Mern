const express = require("express");
const server = express();
const { create, read, update, _delete } = require("./src/controller");
const mongoose = require("mongoose");
const cors = require("cors");
const parser = require("body-parser");
server.use(cors());
server.use(parser.json());


mongoose.connect("mongodb://127.0.0.1:27017/To-Do");
mongoose.connection.on("connected", () => {
    console.log("DB is Connected");
});



server.get("/readtask", read);
server.post("/createtask", create);
server.put("/updatetask", update);
server.delete("/deletetask", _delete);





server.listen("5000", () => {
    console.log("server started on Port: 5000");
});
