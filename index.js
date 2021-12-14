let fs = require('fs');
const path = require('path');
/*
module.exports = () => {
  // ...
};
*/

// La ruta existe
const routeExists = fs.existsSync ('../README.md');
console.log (routeExists);
//const routeExists = (path) => fs.existsSync(path);

//¿La ruta es absoluta?
const routeAbsolute = path.isAbsolute('./README.md');
console.log (routeAbsolute);
// const routeAbsolute = (path) => path.isAbsolute(path);

//convertir una ruta relativa a absoluta
const convertRoute =  path.resolve('./README.md');
console.log (convertRoute);
// const convertRoute =  (path) => path.resolve(path);

// Verificar  si es una carpeta
const itsaDirectory = fs.statSync('./README.md').isDirectory();
console.log(itsaDirectory);
// const itsaDirectory = (path) => fs.statSync(path).isDirectory();


// verificar si es un archivo
 const istaFile = fs.statSync('./README.md').isFile();
 console.log(istaFile);
 // const istaFile = (path) => fs.statSync(path).isFile();


// leer directorio (buscar  carpetas)
const archivos = fs.readdir('./', (err, files)=>{
  if (err) return
  console.log(files)
})
//const readDirectory = (path) => fs.readdirSync(path);

// Es un archivo md
var validateExtension = path.extname('./README.md');
console.log(validateExtension);
//const validateMd = (path) => path.extname(path);

//leer un archivo en especifico
fs.readFile('./README.md', 'utf8', (err, contenido) =>{
  if (err) throw err
  console.log(contenido)
})
// const readFilemd =(path) =>  fs.readFileSync(path,'utf8');

