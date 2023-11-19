const express = require('express');
const app = express();

app.get('/api/v1/bootcamp', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all get' });
});

app.get('/api/v1/bootcamp/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `get the bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamp', (req, res) => {
  res.status(200).json({ success: true, msg: 'show post get' });
});

app.put('/api/v1/bootcamp/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `update the bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamp', (req, res) => {
  res.status(200).json({ success: true, msg: 'delete post get' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
