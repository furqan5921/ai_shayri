require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { responseGenerator } = require("./controller/shayriCtrl");
const PORT = process.env.PORT || 8080

const server = express();

server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.get("/", async (req, res) => {
    console.log("coming here")
    return res.send("server is working fine")
})
server.post("/getResponse", responseGenerator)

server.listen(PORT, () => console.log('listening on port ' + PORT));