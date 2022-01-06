let fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); //node-fetch from v3 is an ESM-only module - you are not able to import it with require() - se realizó la instalación antigua de node, que permite llamarlo con require

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
//console.log(joinPaths('C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba'))

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
//console.log(searchPathMd('./carpeta_de_prueba'))


const regexAllLink = /\[([^\[]+)\](\(.*\))/gm;
const regexReconoceTexto = /\[([\w\s\d.()]+)\]/g;
const regexReconoceLinks = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm

const obtenerLinks = (route) => {
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

//console.log(obtenerLinks('C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba'));

// Función que devuelve una promesa para obtener el status y las propiedades completas de los links en caso si sean validadas las options

const funcionObtenerStatusdeLinks = (arrayDeLinksyPropiedades) => {
  const arrayDeLinksValidados = arrayDeLinksyPropiedades.map((elemento) =>
    fetch(elemento.href)
      .then((res) => {
        const data = {
          href: elemento.href,
          text: elemento.text, // jala el key "text" del objeto anterior
          file: elemento.file,
          status: res.status, // el método status pertenece a fetch y devuelve un number
          message: res.status >= 200 && res.status <= 299 ? 'OK' : 'FAIL', // Normalmente cuando el status de la peticion http da un numero con base 2 significa que la peticion ha tenido éxito
        };
        return data;
      }).catch((error) => {
        const data = {
          href: elemento.href,
          text: elemento.text,
          file: elemento.file,
          status: 'Error ' + error,
          message: 'FAIL'
        };
        return (data);
      }));
  return Promise.all(arrayDeLinksValidados);
};


/*console.log(funcionObtenerStatusdeLinks(obtenerLinks('C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba')));
const statusLink = funcionObtenerStatusdeLinks(obtenerLinks('C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba'));
statusLink.then( res => console.log(res)).catch( error => console.log(error));*/
/*
const getValidLinks = (result) => {
  const arrayDeLinksValidados = []
   fetch(result.href)
  .then(res => {
    const objRes = {
      href: result.href,
      title: result.title,
      file: result.file,
      status: res.status,
      message: res.status >= 200 && res.status <= 299 ? 'OK' : 'fail'
      }
      return objRes //arrayDeLinksValidados.push(objRes);
  }).catch(rej => {
    const objRej ={
      href: result.href,
      title: result.title,
      file:result.file,
      status: rej.status,
      message: 'ERROR SERVER'
    }
    console.log('prueba:', arrayDeLinksValidados)
    return objRej //arrayDeLinksValidados.push(objRej);
  })
  return Promise.all(arrayDeLinksValidados.map(result))
};
const prueba = console.log(ObtenerLinks('C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba'))
const prueba2 = console.log(getValidLinks(prueba).then( res => console.log(res)).catch( rej => console.log(rej)));
console.log(prueba2)
*/

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
  obtenerLinks,
  funcionObtenerStatusdeLinks
};


