//icludes a route object that holds key-value pairs mapped to GET requests through the get() function and POST requests through the post() function
//The handle function is the one reffered to as the callback function to create-server in main.js
//The get and post functions take a URL and callback function and then map them to each other in the routes object
//if no routes are found, I use my cumstom getFile function in the utils modules to respond with an error page.

//import required modules 
const httpStatus = require('http-status-codes'),
  contentTypes = require('./contentTypes'),
  util = require('./utils');

const routes = {
  "GET": {},
  "POST": {}
};

