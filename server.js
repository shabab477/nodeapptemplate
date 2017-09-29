import express from "express"
import config from "./config"
import apiRouter from "./api"

const server = express()

server.get("/", (req, res) => {
	res.send("hello world")
})

server.use("/api", apiRouter)

server.listen(config.port, ()=>{
	console.log("Listening from express")
})