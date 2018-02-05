var path = require('path')

const imageDir = path.resolve(__dirname, './');

const fs = require('fs');

fs.readdir('images/', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})