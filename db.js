const assert = require("assert");
//const client = require("mongodb").MongoClient;
const {MongoClient, ServerApiVersion} = require("mongodb");
const db_tools = require('./mongo_tools');



var _db;
var client;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
//const client = new MongoClient(uri,  {
//  serverApi: {
//  version: ServerApiVersion.v1,
//  strict: true,
//  deprecationErrors: true,
//  }
//});



//  async connectToServer: function(url, aDbName, callback ) {
//    try {
//      await client.connect();
//    }
//  },

//  connectToServer: function(url, aDbName, callback ) {
  async function connectToServer(url, aDbName, callback ) {
    console.log("Connecting to:" + url);
    //client = new MongoClient(url);


//  const client = new MongoClient(uri);
//  try {
//    const database = client.db(db_tools.DB_NAME);
//    const film_record = database.collection(db_tools.COLLECTION_NAME);



    client = new MongoClient("mongodb://192.168.0.116:30164/FilmDatabase", {
       useUnifiedTopology: true,
       useNewUrlParser: true,
       monitorCommands: 'true',
       //loggerLevel: 'debug',
       // logger: (message, context) => console.dir(context),
    });
    await client.connect();
    //MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {

    console.log("HERE1");
    const database = await client.db(db_tools.DB_NAME);
    console.log("HERE2");
    const records = database.collection(db_tools.COLLECTION_NAME);
    console.log("HERE3");

    const filter = {_id: 0, title: 1 , year: 2};
    const docs = records.find().project(filter);
    console.log("HERE4");

    for await (const doc of docs) {
      console.log("HERE5");
      console.log(doc);
    }

    console.log("HERE6");
    
    
//    const database = client.db(db_tools.DB_NAME);
//    const records = database.collection(db_tools.COLLECTION_NAME);

//    console.log ("Records:" + records)
//    for record in records:

//    await client.connect();
//    console.log ("HERE after connect")



//    //MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
//    console.log("Looking for " + aDbName);
//    _db  = await client.db(aDbName);
//    const film_record = _db.collection(db_tools.COLLECTION_NAME);

    //console.log("Connected");
    return callback("connected");
    //} );
  }

  function getDb() {
    return _db;
  }

  async function closeDb (){
   await client.close();
  }

//  getDb: function() {
//    return _db;
//  },
//
//  closeDb: function(){
//   await client.close();
//  }

module.exports = {
connectToServer,
getDb,
closeDb
};


//let _db;
//
//async function initDb(callback) {
//  if (_db) {
//
//    console.warn("Trying to init DB again!");
//    return callback(null, _db);
//  }
//
//  const uri = db_tools.get_url();
//  console.log("URI:" + uri)
//  const client = new MongoClient(uri);
//  //client.connect(config.db.connectionString, config.db.connectionOptions, connected);
//  //client.connect(uri, config.db.connectionOptions, connected);
//  _db = client.db(db_tools.DB_NAME);
//
////  function connected(err, db) {
////    if (err) {
////      return callback(err);
////    }
//    console.log("DB initialized - connected to: " + config.db.connectionString.split("@")[1]);
////      _db = db;
////      return callback(null, _db);
////    }
//}
//
//function getDb() {
//  assert.ok(_db, "Db has not been initialized. Please called init first.");
//  return _db;
//}
//
//
//m//odule.exports = {
//    getDb,
//    initDb
//};
