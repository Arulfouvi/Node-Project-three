//@description  get all bootcamp
// @routes  GET /api/v1/bootcamps
// @access public

const ErrorResponse = require ('../utills/errorResponse.js')
const bootcamp = require ('../controllers/bootcamps.js')
const asyncHandler = require ('../middleware/async.js')

exports.getBootcamps = asyncHandler (async(res,req,next)=>{
    const bootcamp = bootcamp.find();
    
    res
    .status(200)
    .json({success: true, count: bootcamp.length, data:bootcamp});
});
//@description  get single bootcamp
// @routes  GET /api/v1/bootcamps/id
// @access public
exports.getBootcamps = (res,req,next)=>{
    res.status(200).json({ success: true, msg: `get the bootcamp ${req.params.id}` });
}

//@description  create bootcamp
// @routes  Post /api/v1/bootcamps/
// @access private   u have to login and send a token req
exports.createBootcamps =async (res,req,next)=>{
   const bootcamp = await bootcamp.create(req.body);
   res.status (201).json({
    success: true,
    data:bootcamp,
   })
}

//@description  update bootcamp
// @routes  put /api/v1/bootcamps/id
// @access private   u have to login and send a token req
exports.updateBootcamps = async (res,req,next)=>{
    const bootcamp = await bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
        
}


//@description  delete bootcamp
// @routes  delete /api/v1/bootcamps/id
// @access private   u have to login and send a token req
exports.deleteBootcamps = (res,req,next)=>{
    res.status(200).json({ success: true, msg: `delete the bootcamp ${req.params.id}` }); 
}