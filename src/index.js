let fs = require('fs');
import { existsSync } from 'fs';
const path = require('path');
/*
module.exports = () => {
  // ...
};
*/

const filesDirectory = fs.readdirSync('./');
console.log(filesDirectory);

if (existsSync('/etc/passwd'))
  console.log('The path exists.');


