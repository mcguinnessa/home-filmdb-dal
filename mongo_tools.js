module.exports = {
//export default {

  DB_NAME         : "FilmDatabase",
  COLLECTION_NAME : "owned",

  get_url: function () {
    console.log("get_url()")
    let uri;
//    const prom = new Promise((resolve, reject) => {
      const mongodb_user = process.env.MONGODB_USER;
      const mongodb_password = process.env.MONGODB_PASSWORD;
      const mongodb_uri = process.env.MONGODB_URI;
  
//      mongodb_user.then(mongodb_password.then

//      mongodb_user.then(); 

      //return uri = "mongodb+srv://"+ mongodb_user+":" + mongodb_password+ "@"+ mongodb_uri + "/test?retryWrites=true&w=majority";
      //uri = "mongodb+srv://"+ mongodb_user+":" + mongodb_password+ "@"+ mongodb_uri + "/test?retryWrites=true&w=majority";
      //uri = "mongodb+srv://"+ mongodb_user+":" + mongodb_password+ "@"+ mongodb_uri + "/FilmDatabase?retryWrites=true&w=majority";
      //uri = "mongodb+srv://"+ mongodb_user+":" + mongodb_password+ "@"+ mongodb_uri + "?retryWrites=true&w=majority";
      //uri = "mongodb://film_mgr:paramount@192.168.0.116:30164/FilmDatabase"
      //uri = "mongodb://film_mgr:paramount@192.168.0.116:30164"
      //uri = "mongodb://"+mongodb_user+":"+mongodb_password+"@"+mongodb_uri+"?retryWrites=true&w=majority";
      uri = "mongodb://"+mongodb_user+":"+mongodb_password+"@"+mongodb_uri;
    console.log("URI:" + uri); 
      return uri;
  },
  bar: function () {
    // whatever
  }
};

