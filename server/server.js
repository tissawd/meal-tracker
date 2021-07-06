const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose');



const app = express();


routes.forEach(route => {
    app[route.method](route.path, route.handler);
});



const start = async () => {
  try{
    //Set up default mongoose connection
    var mongoDB = 'mongodb://127.0.0.1/meal-tracker';
    await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    await app.listen(8080);
    console.log("Listening on port 8080");
  }
  catch{
      console.log('Something went wrong')
  }
}

start();