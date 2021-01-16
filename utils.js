//set up a function that I'll use to read file content by exporting an object containing a getFile function
//This function looks for a file at the provided path
//If a file doesn't exit I immediately return an error page


//First import modules to use in getFile
const fs = require('fs'),
  httpStatus = require('http-status-codes'),
  contentTypes = require('./contentTypes');
  
modules.export = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHeader(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content !");
      }
      res.end(data);
    });
  }
};
