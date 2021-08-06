
// requiring express into our system
const express = require('express');

//We would like to add the mongoose as a requirement in our file

//We will then set up our express app
const app = express();



//require('dotenv').config({ path:__dirname+'/.env'});
const  mongoose  =  require('mongoose');

/* // How to Connect to my Cluster Atlas MongoD as per reference into the TP
const uri = config.env.MONGODB_URI
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x => {
    console.log(
      'Connected to Mongo! Database name: "${x.connections[0].name}"'
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
*/


//mongoose.connect("mongodb://localhost:27017/tidi/producto", { useNewUrlParser: true });

mongoose.connect("mongodb://localhost:27017/tidi", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

mongoose.Promise = global.Promise;


//we would add a few more middlewares in the file
app.use(express.static('public'));

app.use(express.json());

//We then set up the app to use the new api.js file we would create to hold our all four operations.

app.use('/api',require('./routes/api'));

//middleware to handle the errors
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });

 // listen for requests
app.listen(process.env.port || 27017, function(){
    console.log('Ready to Go!');
    
});