// Create web server
// Create a route for comments
// Send back a JSON response with a list of comments

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server and test your route using Postman