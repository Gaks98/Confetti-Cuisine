//set up a function that I'll use to read file content by exporting an object containing a getFile function
//This function looks for a file at the provided path
//If a file doesn't exit I immediately return an error page


//First import modules to use in getFile
const fs = require('fs'),
  httpStatus = require('http-status-code'),
  contentTypes = require('./contentTypes');
  

