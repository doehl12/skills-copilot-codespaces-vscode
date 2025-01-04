// Create web server and listen on port 3000
// Load all the necessary modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];
// Parse the request body as JSON
app.use(bodyParser.json());
// Set up the path for the comments API
app.get('/comments', function(req, res) {
  res.json(comments);
});
// Set up the path for creating a new comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});
// Start the server on port 3000
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
// Export the app object
module.exports = app;
