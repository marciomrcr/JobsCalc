const sqlite3 = require("sqlite3")
const { open } = require("sqlite")// importando somente o modulo open

module.exports = () => open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  })

