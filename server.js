import http from 'http';
import api from './api/api.js';
import config from './api/config/index.js';
import database from './api/config/database.js';
import mongoose from 'mongoose';
import seeder from 'mongoose-seeder';

const server = http.createServer(api);
const db = mongoose.connection;

  // TODO: seeders para moongose
  const data = ({
    name: "Andres Manuel",
    lastName: "Lopez Obrador",
    phone: "+51-1-297394",
    email: "amlo@gmail.com",
    password: "1g7s@c9D"
});

seeder.connect(db, function () {
    seeder.loadModels("../models/User.js")

    seeder.clearModels( ["User"], function () {
      seeder.populateModels(data, function(error, done) {
        if (error) {
          return console.log("seed error", error)
        }
        if (done) {
          return console.log("seed done", done)
        }
        seeder.disconnect()
    })
  })

server.on('listening', () => {
  console.log('Server corriendo en el puerto', config.server.port);
});

server.on('error', () => {
  console.log('Error al ejecutar el server en el puerto', config.server.port);
});

server.listen(config.server.port);
database()
})