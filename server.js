const express = require('express');
const app = express();
const dotenv = require('dotenv');

//Route Files

const bootcamp = require('./routes/bootcamp')

//load env 
dotenv.config({ path: './config/config.env'});

//mount router
app.get('/', ( req, res) =>{
 res.send ("<h1>hello team</h1>")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
