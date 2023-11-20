//drescription log req to function

const logger = (res, req ,next) =>{
    req.hello='world !!';
    console.log(`${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`)
    next();
  }
   
  
  module.exports = logger;