const userHelp = ()=> {

  return `
  ***************************************** MD-LINKS HELP ***************************************************
    Debe ingresar la ruta del archivo ya sea relativa o absoluta, por ejemplo:

      C:/Users/Jeanella/Desktop/LIM016-md-links/carpeta_de_prueba

                                 o también:
      carpeta_de_prueba

    Opciones válidas:

      --stats
          ¿Para qué sirve?
            Te mostrará el total de links y los links únicos que encontró
          Ejemplo:
            mdLinks <route> --stats

      --validate
          ¿Para qué sirve?
            Te mostrará el link (href), el texto que figura para enlazar el link (text), su ruta (file), el statuts y el mensaje del status (message)
          Ejemplo:
            mdLinks <route> --validate

      --stats --validate  o --validate --stats
          ¿Para qué sirve?
            Te mostrará el total de links, unicos y rotos.
          Ejemplo:
            md-links <route> --stats --validate

    También si escribes solamente mdLinks <route> obtendrás el link, el texto que lo enlaza y su ruta`
  }

  module.exports = {userHelp};
