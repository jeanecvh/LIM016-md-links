const {
  totalLinks,
  uniqueLinks,
  brokenOfLinksStats,
   } = require('../src/stats.js');

const path = require('path');
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
    },
    {
      href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options',
      text: 'nodeJs',
      file: path.resolve('./carpeta_de_prueba/links_prueba.md'),
      status: 200,
      message: 'OK'
    }
  ]

  describe('totalLinks', ()=>{
    it('debe retornar el total de links del array', () => {
        expect(totalLinks(mdLinksWithStatus)).toBe(4);
    });
});

describe('uniqueLinks', ()=>{
  it('debe retornar solamente el total de los links únicos del array (no repetidos)', ()=>{
      expect(uniqueLinks(mdLinksWithStatus)).toBe(3);
  })
});

describe('brokenLinks', ()=>{
  it('debe retornar el total de los links rotos del array', ()=>{
      expect(brokenOfLinksStats(mdLinksWithStatus)).toBe(1);
  });
});
