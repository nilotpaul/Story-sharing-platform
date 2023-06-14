const jsonServer = require("json-server")
const cors = require("cors")
const path = require("path")

const Server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

Server.use(cors())
Server.use(jsonServer.bodyParser)
Server.use(middlewares)
Server.use(router)

const PORT = process.env.PORT || 5000

Server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})