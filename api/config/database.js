import mongoose from 'mongoose';
import config from './index.js';
import User from '../models/User.js';
import seeder from 'mongoose-seeder';


const db = mongoose.connection;

// TODO: seeders para moongose
const data = ({
  name: "Andres Manuel",
  lastName: "Lopez Obrador",
  phone: "+51-1-297394",
  email: "amlo@gmail.com",
  password: "1g7s@c9D"
})

seeder.connect(db, function () {
  seeder.loadModels([
    "../models/User.js"
  ]);
  seeder.clearModels( ["User"] );
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


db.on('connected', () => {
  console.log('Se conectó a la base 💚');
});

db.on('error', () => {
  console.log('Error en la conexión de DB ❤');
});

export default () => {
  mongoose.connect(config.database.uri);
};

