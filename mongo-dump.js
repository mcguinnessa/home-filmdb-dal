const db_tools = require('./mongo_tools');
const {MongoClient} = require('mongodb');

//const day_ms = 24 * 60 * 60 * 1000;
//const hour_ms = 60 * 60 * 1000;


async function run(){

  const uri = await db_tools.get_url();
  console.log("URI");
  console.log(uri);
  const client = new MongoClient(uri);

  try {
    const database = client.db(db_tools.DB_NAME);
    const records = database.collection(db_tools.COLLECTION_NAME);

    //var now = new Date();
    //var now_ms = now.getTime()
    //var yesterday = new Date(now_ms - day_ms);
    //var disk_usage = 25;

    //var date_record = yesterday;
    //while (date_record < now){

      //var mo_traffic = Math.floor(Math.random() * 10000);
      //var mt_traffic = Math.floor(Math.random() * 10000);
      //var cpu_usage = Math.floor(Math.random() * 100);
      //var cpu_temp = Math.floor(Math.random() * 100);
      //var memory_usage = Math.floor(Math.random() * 100);
      //disk_usage += (Math.floor(Math.random() * 8) - 2);
      //if (disk_usage > 100) {disk_usage = 100;}

    const filter = {_id: 0, title: 1 , year: 2};
    const docs = records.find().project(filter);

    for await (const doc of docs) {
      console.log(doc);

    }

   

//    const doc = {
//      "title": "Barbenheimer",
//      "year": "2024",
//    }  
//    const result = await film_record.insertOne(doc);
//    console.log(`A document was inserted with the _id: ${result.insertedId}`);

//    date_record = new Date(date_record.getTime() + hour_ms);
//    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
