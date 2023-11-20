const express = require('express');
const router = express.Router(); // Use express.Router() to create a router instance

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all get' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `get the bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(201).json({ success: true, msg: 'show post get' }); // Use status code 201 for POST requests
});

router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `update the bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => { // Use a dynamic route parameter for DELETE
  res.status(200).json({ success: true, msg: `delete the bootcamp ${req.params.id}` });
});

module.exports = router;

const app = express(); // Create an instance of express
app.use(express.json()); // Parse incoming requests with JSON payloads

app.use('/api/bootcamps', router); // Mount the router at the /api/bootcamps path

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
