import config from "./config"
import express from "express"

const server = express()

server.get("/", (req, res) => {
	res.send("hello world")
})

console.log("object " + config);
console.log("imported port " + config.port);

console.log("port num is " + process.env.PORT);
server.listen(config.port, () => {
	console.log("listening for events")
})