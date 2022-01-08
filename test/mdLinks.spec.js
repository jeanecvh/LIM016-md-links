const {mdLinks} = require('../src/mdLinks.js');
const path = require('path');

const mdLinksReject = [
  {
    href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html',
    text: 'a link',
    file: path.resolve('./carpeta_de_prueba/carpeta_prueba_1/fs.md')
  },
  {
    href: 'https://bitly.com/404-error-page',
    text: 'error',
    file: path.resolve('./carpeta_de_prueba/carpeta_prueba_1/fs.md')
  },
  {
    href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options',
    text: 'nodeJs',
    file: path.resolve('./carpeta_de_prueba/links_prueba.md'),
  }
]

const mdLinksWithStatus = [
  {
    href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html',
    text: 'a link',
    file: path.resolve('./carpeta_de_prueba/carpeta_prueba_1/fs.md'),
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://bitly.com/404-error-page',
    text: 'error',
    file: path.resolve('./carpeta_de_prueba/carpeta_prueba_1/fs.md'),
    status: 404,
    message: 'FAIL'
  },
  {
    href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options',
    text: 'nodeJs',
    file: path.resolve('./carpeta_de_prueba/links_prueba.md'),
    status: 200,
    message: 'OK'
  }
]

describe('mdLinks', () => {
  it('debe retornar un mensaje, advirtiendo que la ruta no existe', ()=>{
    const resultado = mdLinks('carpeta_de_prueba/text.md')
    resultado.then((res)=> expect(res).toBe('La ruta no existe')).catch((res)=>res);
  });
  it('debe retornar en un array de objetos, las propiedades de los links, pertenecientes solo a archivos .md de la ruta que se ingresa, siempre y cuando option sea igual a "0" ', () => {
    const resultado = mdLinks(path.resolve('./carpeta_de_prueba'),{ validate: false });
    resultado.then((res) => expect(res).toEqual(mdLinksReject));
  });
  /*it('debe retornar en un array de objetos, las propiedades de los links más sus status pertenecientes solo a archivos .md de la ruta que se ingresa si ha sido validado (options)', () => {
    const resultado = mdLinks(path.resolve('./carpeta_de_prueba'),{ validate: true });
    resultadod.then((res) => expect(res).toEqual(mdLinksWithStatus));
  });*/
})
