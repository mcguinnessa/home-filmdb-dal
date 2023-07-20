const express = require('express');
const mongoose = require('mongoose');

const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_uri = process.env.MONGODB_URI;
const mongodb_doc = process.env.MONGODB_DOC;

console.log("URI:" + mongodb_uri);
console.log("DB:" + mongodb_doc);
console.log("user:" + mongodb_user);
console.log("pass:" + mongodb_password);


const mongo_str = "mongodb://"+mongodb_uri+"/" + mongodb_doc
//const mongo_str = "mongodb://192.168.0.116:30164/FilmDabase";
//const mongo_str = "mongodb://film_mgr:paramount@192.168.0.116:30164/FilmDatabase"
//const mongo_str = "mongodb://film_mgr:paramount@192.168.0.116:30164"


console.log("Connecting:" + mongo_str)

mongoose.connect(mongo_str, {
  authSource: "admin",
//  user: "film_mgr",
//  pass: "paramount",
  user: mongodb_user,
  pass: mongodb_password,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected: ' + mongo_str);
})


const allfilms = require('./routes/all_films');
const app = express();
app.use("/films", allfilms)
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
