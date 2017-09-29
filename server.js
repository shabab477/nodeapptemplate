const config = require("./config") 
const express = require("express")
const server = express()

server.get("/", (req, res) => {
	res.send("hello world")
})

console.log("port num is " + config.port);
server.listen(config.port, () => {
	console.log("listening for events")
})