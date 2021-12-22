let fs = require('fs');
const path = require('path');
//const fetch = require('node-fetch');

// La ruta existe
const routeExists = (route) => fs.existsSync(route);
//const routeExists = fs.existsSync ('../README.md'); console.log (routeExists);

//Validar y convertir si la ruta no es absoluta (usar esta función)
const routeState = (route) => !path.isAbsolute(route) ? path.resolve(route) : route
//console.log(routeState(process.argv[2]))

// Verificar  si es un directorio
const itsaDirectory = (route) => fs.statSync(route).isDirectory();

// leer directorio
const readDirectory = (route) => fs.readdirSync(route);

// verificar si es un archivo
const istaFile = (route) => fs.statSync(route).isFile();

//leer contenido del archivo
const readFilemd = (route) =>  fs.readFileSync(route,'utf8');
//console.log(readFilemd('../carpeta_de_prueba/links_prueba.md'))

// Validar extensión del archivo = md
const validateExtension = (route) => path.extname(route) === '.md'; // retorna true or false

// Unir dos rutas fragmentadas: ruta del directorio + ruta de cada uno de los archivos
const joinPaths = (route) => {
    return readDirectory(route).map((elemento) => path.join(route, elemento));
};
//console.log(joinPaths('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba'))

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


const regexAllLink = /\[([^\[]+)\](\(.*\))/gm;
const regexReconoceTexto = /\[([\w\s\d.()]+)\]/g;
const regexReconoceLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm

const ObtenerLinks = (route) => {
  const arrayTodasPropiedades = [];
  searchPathMd(route).forEach((eachRouteMd) => {
      const readEachMd = readFilemd(eachRouteMd);// Lee cada link completo del archivo .md evaluado
      const fitLinkAll = readEachMd.match(regexAllLink);// Nos da un array con links que cumplen con la estructura de acuerdo a la exp regular declarada
      if(readEachMd.length > 0 && regexAllLink.test(readEachMd) === true){
          fitLinkAll.forEach((e)=>{
              const objetoPropiedadessLink = {
                  href: e.match(regexReconoceLinks).toString(),
                  text: e.match(regexReconoceTexto).join().slice(1,-1),
                  file: eachRouteMd,
              };
              arrayTodasPropiedades.push(objetoPropiedadessLink);
          });
      } else if (!regexAllLink.test(readEachMd)){
        console.log("No found links");
      }
  });
  return arrayTodasPropiedades;
};

//console.log(ObtenerLinks('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba'));




module.exports = {
  routeExists,
  routeState,
  itsaDirectory,
  istaFile,
  readDirectory,
  joinPaths,
  validateExtension,
  readFilemd,
  searchPathMd,
  ObtenerLinks
};


