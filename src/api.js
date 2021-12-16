let fs = require('fs');
const path = require('path');
//const fetch = require('node-fetch');


// La ruta existe
const routeExists = (route) => fs.existsSync(route);
//const routeExists = fs.existsSync ('../README.md'); console.log (routeExists);

//Validar y convertir si la ruta no es absoluta (usar esta función)
const routeState = (route) => !path.isAbsolute(route) ? path.resolve(route) : route

/*En vez de estas
//convertir una ruta relativa a absoluta
//¿La ruta es absoluta?
const routeAbsolute = (route) => path.isAbsolute(route);
//const routeAbsolute = path.isAbsolute('./README.md');console.log (routeAbsolute);
//const convertRoute =  (route) => path.resolve(route);
const convertRoute =  path.resolve('./README.md');
console.log (convertRoute);
*/

// Verificar  si es una carpeta
const itsaDirectory = (route) => fs.statSync(route).isDirectory();
// const itsaDirectory = fs.statSync('./README.md').isDirectory(); console.log(itsaDirectory);

// verificar si es un archivo
const istaFile = (route) => fs.statSync(route).isFile();
//const istaFile = fs.statSync('./README.md').isFile(); console.log(istaFile);

// Es un archivo md
const validateExtension = (route) => path.extname(route);
// var validateExtension = path.extname('./README.md');console.log(validateExtension);

// leer directorio (buscar  carpetas)
const readDirectory = (route) => fs.readdirSync(route);
//const archivos = fs.readdir('./', (err, files)=>{ if (err) return console.log(files)})

// Unir dos rutas fragmentadas: ruta del directorio + ruta de cada uno de los archivos
const joinPaths = (route) => {
    return readDirectory(route).map((elemento) => path.join(route, elemento));
};

//leer un archivo en especifico
const readFilemd =(route) =>  fs.readFileSync(route,'utf8');
// fs.readFile('./README.md', 'utf8', (err, contenido) =>{if (err) throw err console.log(contenido)})



module.exports = { routeExists, routeState, itsaDirectory, istaFile, readDirectory, joinPaths, validateExtension, readFilemd
};

