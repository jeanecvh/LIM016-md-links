const allFunctions = require('./api.js')

const mdLinks = (path, option = {}) => {
  const promise = new Promise ((resolve, reject) => {
    if (!allFunctions.routeExists(path)){
      reject("La ruta no existe");
    } else {
      const propiedadesDeLinks =  allFunctions.obtenerLinks(path);
        if (!(option.validate)){
          resolve (propiedadesDeLinks);
        } else {
          const statusDeLinks = allFunctions.funcionObtenerStatusdeLinks(path);
          resolve (statusDeLinks)
        }
    }
  });
  return promise
}
module.exports = { mdLinks };
