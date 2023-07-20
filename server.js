const express = require('express');
const mongoose = require('mongoose');



const mongo_str = "mongodb://192.168.0.116:30164/FilmDatabase"
//const mongo_str = "mongodb://film_mgr:paramount@192.168.0.116:30164/FilmDatabase"
//const mongo_str = "mongodb://film_mgr:paramount@192.168.0.116:30164"


mongoose.connect(mongo_str, {
  authSource: "admin",
  user: "film_mgr",
  pass: "paramount",
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})


const allfilms = require('./routes/all_films');
const app = express();
app.use("/films", allfilms)
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
