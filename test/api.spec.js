const { routeExists, routeState, itsaDirectory, istaFile, readDirectory, joinPaths, validateExtension, readFilemd
} = require('../src/api.js')

describe('routeExists', () => {
  it('is a function', () => {
    expect(typeof routeExists).toBe('function');
  });
  it('should return true if route exists', () => {
    expect(routeExists('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README.md')).toBe(true);
  });
  it('should return false if route does not exist', () => {
    expect(routeExists('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README123.md')).toBe(false);
  })

});

describe('routeState', () => {
  it('is a function', () => {
    expect(typeof routeState).toBe('function');
  });
  it('should return an absolute path or route', () => {
    expect(routeState('README.md')).toBe('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README.md');
  });
});

describe('itsaDirectory', () => {
  it('should return true if the route is a directory', () => {
    expect(itsaDirectory('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links')).toBe(true);
  });
  it('should return false if the route is not a directory', () => {
    expect(itsaDirectory('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README.md')).toBe(false);
  });
});

describe('istaFile', () => {
  it('should return true if the route is a file', () => {
    expect(istaFile('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README.md')).toBeTruthy;
  });
  it('should return false if the route is not a file', () => {
    expect(istaFile('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links')).toBeFalsy;
  });
});

describe('validateExtension', () => {
  it('should return an extension , example .txt , .md', () => {
    expect(validateExtension('README.md')).toBe('.md');
  })
})

describe('readDirectory', () => {
  it('should return an array of routes who are inside of the directory', () => {
    expect(readDirectory('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba')).toEqual([ 'carpeta_prueba_1', 'carpeta_prueba_2', 'links_prueba.md', 'text.md'  ]);
  });
});

describe('joinPaths', () => {
  it('should return an array with absolute routes of their files', () => {
    expect(joinPaths('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba')).toEqual([
      'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_1',
      'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\carpeta_prueba_2',
      'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md',
      'C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\text.md',
    ]);
  });
});

describe('readFilemd', () => {
  it('is a function', () => {
    expect(typeof readFilemd).toBe('function')
  });

  it('should return a string with all the content of the file', () => {
    const result = readFilemd('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\carpeta_de_prueba\\links_prueba.md');
    expect(result.trim()).toEqual(`[a link](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options)`);
  });
});
