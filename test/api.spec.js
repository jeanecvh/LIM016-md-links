const { routeExists, routeState, itsaDirectory, istaFile, readDirectory, joinPaths, validateExtension, readFilemd, searchPathMd
} = require('../src/api.js')

const route = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README.md';
const routeFalse = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README123.md';
const routeDirectory = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links';
const directoryPrueba = 'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba'
const filesPrueba = [ 'carpeta_prueba_1', 'carpeta_prueba_2', 'links_prueba.md', 'text.md'];
const routesfilesPrueba = [
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_1',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_2',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\text.md',
];
const routesfilesMD = [
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_1\\fs.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_2\\text1.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md',
  'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\text.md'
]


describe('routeExists', () => {
  it('is a function', () => {
    expect(typeof routeExists).toBe('function');
  });
  it('retorna true si el parametro (route) existe', () => {
    expect(routeExists(route)).toBe(true);
  });
  it('retorna false si el parametro (route) no existe', () => {
    expect(routeExists(routeFalse)).toBe(false);
  })

});

describe('routeState', () => {
  it('is a function', () => {
    expect(typeof routeState).toBe('function');
  });
  it('should return an absolute path or route', () => {
    expect(routeState('README.md')).toBe(route);
  });
});

describe('itsaDirectory', () => {
  it('should return true if the route is a directory', () => {
    expect(itsaDirectory(routeDirectory)).toBe(true);
  });
  it('should return false if the route is not a directory', () => {
    expect(itsaDirectory(route)).toBe(false);
  });
});

describe('istaFile', () => {
  it('should return true if the route is a file', () => {
    expect(istaFile('README.md')).toBe(true);
  });
  it('should return false if the route is not a file', () => {
    expect(istaFile(routeDirectory)).toBe(false);
  });
});

describe('validateExtension', () => {
  it('should return an extension , example .txt , .md', () => {
    expect(validateExtension('README.md')).toBe('.md');
  })
})

describe('readDirectory', () => {
  it('should return an array of routes who are inside of the directory', () => {
    expect(readDirectory(directoryPrueba)).toEqual(filesPrueba);
  });
});

describe('joinPaths', () => {
  it('should return an array with absolute routes of their files', () => {
    expect(joinPaths(directoryPrueba)).toEqual(routesfilesPrueba);
  });
});

describe('readFilemd', () => {
  it('is a function', () => {
    expect(typeof readFilemd).toBe('function')
  });

  it('should return a string with all the content of the file', () => {
    const result = readFilemd(routesfilesMD[2]);
    expect(result.trim()).toEqual(`[a link](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options)`);
  });
});

describe('searchPathMd', () => {
  it('es una funcion', () => {
    expect(typeof searchPathMd).toBe('function')
  });

  it ('retorna un array de rutas absolutas de archivos md', () => {
    expect(searchPathMd(directoryPrueba).toEqual(routesfilesMD))
  })
})
