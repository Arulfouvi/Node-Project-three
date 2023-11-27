const fs = require ('fs')
const moongose = require ('mongoose')
const colors = require ('colors')
const dotenv = require ('dotenv')

//load Env vars

dotenv.config ({path:'./config/config.env'});

// load models 
const Bootcamps = require ('./controllers/bootcamps');
const Bootcamp = require('./routes/bootcamp');

// connect db
moongose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//read JSON file

const bootcamps =JSON.parse (fs.readFileSync(`${__dirname}/_data/bootcamps.Json`,'utf-8'));


//import into DATA BASE

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
  }
  catch(err){
    console.log('data imported')
  }
}
