const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');


// Route Files
const bootcamp = require('./routes/bootcamp');

// Load env
dotenv.config({ path: './config/config.env' });

const connectDB = require ('./config/db')

// Connect to the database
connectDB();

// Dev log middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount router
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


//handle unhandle promise rejection
process.on ('unhandleRejection',(err,promise)=>{
  console.log(`Error: ${err.message}`);
  server.close(()=>process.exit(1)
   )
});
