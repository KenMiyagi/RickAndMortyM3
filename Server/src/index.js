const server = require("./app")
const PORT = 3002;
const { conn } = require('./DB_connection');

conn.sync({force: true})

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});