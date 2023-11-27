const ErrorResponse = require("../utills/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error ={...err}
   const message = err.message; 


    console.log(err.stack.red);


    console.log(err);


    //mongoose bad objectID
    if(err.name ==='castError'){
        const message = `bootcamp not found with id of ${err.value}`;
        error = new ErrorResponse (message,404);
    }

    //mongoose duplicate key
    if (err.code==11000)
{
    const message ='duplicate field value entered'
    error = new ErrorResponse()
}

// Mongoose validation error

if(err.name ==='validationError'){
   const message =Object.values(err.errors).map(val => val.message);
   error = new ErrorResponse(message, 400);
}


    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'server error'
    });
};

module.exports = errorHandler;
