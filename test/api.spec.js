const { routeExists, routeState, itsaDirectory, istaFile, readDirectory, validateExtension, readFilemd
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
  it('should return true if route exists', () => {
    expect(routeState('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README.md')).toBe(true);
  });
  it('should return false if route does not exist', () => {
    expect(routeState('C:\\Users\\Jeanella\\Desktop\\LIM016-md-links\\README123.md')).toBe(false);
  })

});
