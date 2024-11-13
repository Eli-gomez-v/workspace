const { fetchArticleById, fetchAllArticles } = require('../src/index');

// Mock fetch
global.fetch = jest.fn();

describe('fetchArticleById', () => {
  beforeEach(() => {
    fetch.mockClear();
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Para que no inunde la consola con errores
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Para evitar mensajes de log
  });

  test('should fetch article by id successfully', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ id: 1, title: 'Test title', body: 'Test body' }),
    }));

    const article = await fetchArticleById(1);
    expect(article).toEqual({ id: 1, title: 'Test title', body: 'Test body' });
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
  });

  test('should handle network response not ok (response.ok = false)', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      ok: false,
      status: 500,
      json: () => Promise.resolve({}),
    }));

    const article = await fetchArticleById(1);
    expect(article).toBeNull(); // Verifica que se maneje correctamente el error
    expect(console.error).toHaveBeenCalledWith('Fetch error:', expect.any(Error));
  });

  test('should handle fetch errors (catch block)', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Network error'))); // Cambiado a usar Error
    const article = await fetchArticleById(1);
    expect(article).toBeNull(); // Verifica que se maneje correctamente el error
    expect(console.error).toHaveBeenCalledWith('Fetch error:', expect.any(Error));
  });
});

describe('fetchAllArticles', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('should fetch all articles successfully', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve([{ id: 1, title: 'Test title', body: 'Test body' }]),
    }));

    const articles = await fetchAllArticles();
    expect(articles).toEqual([{ id: 1, title: 'Test title', body: 'Test body' }]);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });

  test('should handle network response not ok (response.ok = false)', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      ok: false,
      status: 500,
      json: () => Promise.resolve([]),
    }));

    const articles = await fetchAllArticles();
    expect(articles).toBeNull(); // Verifica que se maneje correctamente el error
    expect(console.error).toHaveBeenCalledWith('Fetch error:', expect.any(Error));
  });

  test('should handle fetch errors (catch block)', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Network error'))); // Cambiado a usar Error
    const articles = await fetchAllArticles();
    expect(articles).toBeNull(); // Verifica que se maneje correctamente el error
    expect(console.error).toHaveBeenCalledWith('Fetch error:', expect.any(Error));
  });
});
