const path = require('path');
const {
  routeExists,
  routeState,
  itsaDirectory,
  istaFile,
  readDirectory,
  joinPaths,
  validateExtension,
  readFilemd,
  searchPathMd,
  ObtenerLinks } = require('../src/api.js')

const regex = /\//gi
const route = (path.resolve('..\\README.md').replace(/\\/g,"\\\\"));
const routeFalse = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README123.md';
const routeDirectory = (path.resolve('..\\..\\LIM016-md-links').replace(/\\/g,"\\\\"));
const notRoutemd = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\prueba.text';
const directoryPrueba = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba'
const filesPrueba = [ 'carpeta_prueba_1', 'carpeta_prueba_2', 'links_prueba.md', 'prueba.text','text.md' ];
const routesfilesPrueba = [
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_1',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_2',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\prueba.text',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\text.md',
];
const routesfilesMD = [
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_1\\fs.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_2\\text1.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\text.md'
];

const mdLinks = [
  {
    href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html',
    text: 'a link',
    file: 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_1\\fs.md'
  },
  {
    href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options',
    text: 'nodeJs',
    file: 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md'
  }
]

describe('routeExists', () => {
  it('retorna true si el parametro (route) existe', () => {
    expect(routeExists(route)).toBe(true);
  });
  it('retorna false si el parametro (route) no existe', () => {
    expect(routeExists(routeFalse)).toBe(false);
  });

});

describe('routeState', () => {
  it('debe retornar una ruta absoluta', () => {
    expect(routeState('../README.md')).toBe(route);
  });
});

describe('itsaDirectory', () => {
  it('retorna true si la ruta es un directorio', () => {
    expect(itsaDirectory(routeDirectory)).toBe(true);
  });
  it('retorna false si la ruta no es un directorio', () => {
    expect(itsaDirectory(route)).toBe(false);
  });
});

describe('istaFile', () => {
  it('retorna true si la ruta es un file', () => {
    expect(istaFile('README.md')).toBe(true);
  });
  it('retorna false si la ruta no es un file', () => {
    expect(istaFile(routeDirectory)).toBe(false);
  });
});

describe('validateExtension', () => {
  it('debe retornar true si la extensión es .md', () => {
    expect(validateExtension(route)).toBe(true);
  });

  it ('debe retornar false si la extensión, no es md', () => {
    expect(validateExtension(notRoutemd)).toBe(false);   //ERROOOOOOOOR
  });
});

describe('readDirectory', () => {
  it('debe retornar las carpetas y files que hay dentro del directorio', () => {
    expect(readDirectory(directoryPrueba)).toEqual(filesPrueba);
  });
});

describe('joinPaths', () => {
  it('debe retornar en un array los archivos de un directorio con sus rutas absolutas', () => {
    expect(joinPaths(directoryPrueba)).toEqual(routesfilesPrueba);
  });
});

describe('readFilemd', () => {
  it('debe retornar en un string todo el contenido del file', () => {
    const result = readFilemd('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md');
    expect(result).toEqual(expect.stringContaining(`[nodeJs](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options)`)); // ERROOOOOOOOOOR
  });
});

describe('searchPathMd', () => {
  it ('retorna un array de rutas absolutas de archivos md', () => {
    expect(searchPathMd(directoryPrueba)).toEqual(routesfilesMD);
  });
});
