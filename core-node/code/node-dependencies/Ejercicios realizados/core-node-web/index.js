console.log('Hello, world!');

const http = require('node:http');
const fs = require('fs');
const { controlDeRutas } = require('./api');

const server = http.createServer((req, res) => {
  // res.end('<h1>Hello, Eli!');
  
    // console.log(req.url);
    if (req.url === '/api') {
  console.log(req.url);
  let html = 'Pagina no encontrada';

  // pagina web
  if (req.url === '/') {
    html = fs.readFileSync('./index.html', { encoding: 'utf-8' });
  } else {
    // pagina de contacto
    if (req.url === '/contact') {
      html = fs.readFileSync('./contact.html', { encoding: 'utf-8' });
    }
  }
  // API
  if (req.url === '/api' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: ['API response'] }));
  } else if (req.url === '/api/post' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ posts: [{ postid: 1, title: 'post 1' }, { postid: 1, title: 'post' }] }));
  }

  res.end(html);
});

cosnt web = (req, res) {
  if (req.url === '/') {
    html = fs.readFileSync('./index.html', { encoding: 'utf-8' });
  } else {
    // pagina de contacto
    if (req.url === '/contact') {
      html = fs.readFileSync('./contact.html', { encoding: 'utf-8' });
    }
  }
}
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//
module.exports = { api, web };