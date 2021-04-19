const express = require("express") 
const server = express()
const routes = require("./routes")
const path = require("path")

//usando o template engine
server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

// habilitar os arquivos estáticos
server.use(express.static("public"))

//usar o req.body
server.use(express.urlencoded({ extended: true}))

server.use(routes)

server.listen(3000, () => console.log('Rodando') )

