let fs = require('fs');
const path = require('path');
//const fetch = require('node-fetch');


// La ruta existe
const routeExists = (path) => fs.existsSync(path);
//const routeExists = fs.existsSync ('../README.md'); console.log (routeExists);

//Validar y convertir si la ruta no es absoluta (usar esta función)
const routeState = (route) => !path.isAbsolute(route) ? path.resolve(route) : route

/*En vez de estas
//¿La ruta es absoluta?
//const routeAbsolute = (path) => path.isAbsolute(path);
const routeAbsolute = path.isAbsolute('./README.md');
console.log (routeAbsolute);
//convertir una ruta relativa a absoluta
//const convertRoute =  (path) => path.resolve(path);
const convertRoute =  path.resolve('./README.md');
console.log (convertRoute);
*/

// Verificar  si es una carpeta
const itsaDirectory = (path) => fs.statSync(path).isDirectory();
// const itsaDirectory = fs.statSync('./README.md').isDirectory(); console.log(itsaDirectory);

// verificar si es un archivo
const istaFile = (path) => fs.statSync(path).isFile();
//const istaFile = fs.statSync('./README.md').isFile(); console.log(istaFile);

// Es un archivo md
const validateExtension = (path) => path.extname(path);
// var validateExtension = path.extname('./README.md');console.log(validateExtension);

// leer directorio (buscar  carpetas)
const readDirectory = (path) => fs.readdirSync(path);
//const archivos = fs.readdir('./', (err, files)=>{ if (err) return console.log(files)})

//leer un archivo en especifico
const readFilemd =(path) =>  fs.readFileSync(path,'utf8');
// fs.readFile('./README.md', 'utf8', (err, contenido) =>{if (err) throw err console.log(contenido)})


module.exports = { routeExists, routeState, itsaDirectory, istaFile, readDirectory, validateExtension, readFilemd
};

