const allFunctions = require('./api.js')

const mdLinks = (path, option = {}) => {
  return new Promise ((resolve, reject) => {
    if (!allFunctions.routeExists(path)){
      reject("La ruta no existe");
    } else {
      const propiedadesDeLinks =  allFunctions.obtenerLinks(path);
        if (!(option.validate)){
          resolve (propiedadesDeLinks);
        }
    }
  });
}

 const resultado = mdLinks('C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba', { validate: false })
resultado.then((resul) => console.log (resul)).catch((err)=> console.log(err));

module.exports = { mdLinks };
