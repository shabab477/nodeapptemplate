let express = require("express")
const server = express()

server.get("/", (req, res) => {
	res.send("hello world")
})