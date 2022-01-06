const userHelper = ()=> {

  return `
  ***************************************** MD-LINKS HELP ***************************************************
    Debe ingresar la ruta del archivo ya sea relativa o absoluta, por ejemplo:
      md-links C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba o
      md-links carpeta_de_prueba
    Opciones validas:
      --stats
          Ejemplo:
            md-links carpeta_de_prueba --stats
            Total: 3
            Unique: 3
      --validate

      --stats --validate  o --validate --stats
          Ejemplo:
            md-links carpeta_de_prueba --stats --validate
            Total: 3
            Unique: 3`
  }

  module.exports = {userHelper};
