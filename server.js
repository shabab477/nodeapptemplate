import express from "express"

const server = express()

server.get("/", (req, res) => {
	res.send("hello world")
})


server.listen(config.port, ()=>{
	console.log("Listening from express")
})