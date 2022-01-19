const allFunctions = require('./api.js')

const mdLinks = (path, option = {}) => {
  return new Promise ((resolve, reject) => {
    let normalizePath = allFunctions.routeState(path.toString())
    if (allFunctions.routeExists(normalizePath)){
      const propiedadesDeLinks =  allFunctions.obtenerLinks(normalizePath);
      if (!(option.validate)){
        resolve(propiedadesDeLinks);
      } else {
        const statusDeLinks = allFunctions.funcionObtenerStatusdeLinks(propiedadesDeLinks);
        resolve (statusDeLinks)
      }
    } else {
      reject("La ruta no existe");
    }
  });
}
module.exports = { mdLinks };
