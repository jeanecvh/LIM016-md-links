let fs = require('fs');
const path = require('path');
//const fetch = require('node-fetch');


// La ruta existe
const routeExists = (route) => fs.existsSync(route);
//const routeExists = fs.existsSync ('../README.md'); console.log (routeExists);

//Validar y convertir si la ruta no es absoluta (usar esta función)
const routeState = (route) => !path.isAbsolute(route) ? path.resolve(route) : route

// Verificar  si es un directorio
const itsaDirectory = (route) => fs.statSync(route).isDirectory();
// const itsaDirectory = fs.statSync('./README.md').isDirectory(); console.log(itsaDirectory);

// leer directorio
const readDirectory = (route) => fs.readdirSync(route);
//const archivos = fs.readdir('./', (err, files)=>{ if (err) return console.log(files)})

// verificar si es un archivo
const istaFile = (route) => fs.statSync(route).isFile();
//const istaFile = fs.statSync('./README.md').isFile(); console.log(istaFile);

//leer contenido del archivo
const readFilemd = (route) =>  fs.readFileSync(route,'utf8');
// fs.readFile('./README.md', 'utf8', (err, contenido) =>{if (err) throw err console.log(contenido)})

// Validar extensión del archivo = md
const validateExtension = (route) => path.extname(route) === '.md';
// var validateExtension = path.extname('./README.md');console.log(validateExtension);

// Unir dos rutas fragmentadas: ruta del directorio + ruta de cada uno de los archivos
const joinPaths = (route) => {
    return readDirectory(route).map((elemento) => path.join(route, elemento));
};

const prueba = console.log(joinPaths.(routeState('../carpeta_de_prueba')))

// * Función para buscar archivos .md con su ruta para poder guardarlos los archivos en un array
const searchPathMd = (route) => {
  let containerFilesmd = [];
  const pathAbsolute = routeState(route); //Extraemos la función que valida y/o convierte a una ruta absoluta
  if (istaFile(pathAbsolute) && validateExtension(pathAbsolute)) { //Si la ruta absoluta es un file & es un file md
    containerFilesmd.push(pathAbsolute);  // añadir al array
  } else if (itsaDirectory(pathAbsolute)){  // y si es un direcitorio (con ruta absoluta)
    joinPaths(pathAbsolute).forEach(element =>{ //
      const mdFiles = searchPathMd(element);
      containerFilesmd = containerFilesmd.concat(mdFiles);
    });
  };
  return containerFilesmd;
}

//console.log(searchPathMd('../carpeta_de_prueba'))

// Expresiones regulares para reconocer la estructura de los links
const regexAllLink = /\[([^\[]+)\](\(.*\))/gm;
const regexText = /\[([\w\s\d.()]+)\]/g;
const regexLink = /\((((ftp|http|https):\/\/)[\w\d\s./?=#&_%~,\-.:]+)\)/g;

module.exports = { routeExists, routeState, itsaDirectory, istaFile, readDirectory, joinPaths, validateExtension, readFilemd, searchPathMd
};


