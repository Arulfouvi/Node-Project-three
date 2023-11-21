//@description  get all bootcamp
// @routes  GET /api/v1/bootcamps
// @access public

exports.getBootcamps = (res,req,next)=>{
    res.status(200).json({ success: true, msg: 'show all get', hello:req.hello });
}

//@description  get single bootcamp
// @routes  GET /api/v1/bootcamps/id
// @access public
exports.getBootcamps = (res,req,next)=>{
    res.status(200).json({ success: true, msg: `get the bootcamp ${req.params.id}` });
}

//@description  create bootcamp
// @routes  Post /api/v1/bootcamps/
// @access private   u have to login and send a token req
exports.createBootcamps = (res,req,next)=>{
    res.status(201).json({ success: true, msg: 'show post get' }); // Use status code 201 for POST requests
}

//@description  update bootcamp
// @routes  put /api/v1/bootcamps/id
// @access private   u have to login and send a token req
exports.updateBootcamps = (res,req,next)=>{
    res.status(200).json({ success: true, msg: `update the bootcamp ${req.params.id}` });
}


//@description  delete bootcamp
// @routes  delete /api/v1/bootcamps/id
// @access private   u have to login and send a token req
exports.deleteBootcamps = (res,req,next)=>{
    res.status(200).json({ success: true, msg: `delete the bootcamp ${req.params.id}` }); 
}