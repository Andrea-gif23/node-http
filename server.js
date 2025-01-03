
const http = require('http');
const pageData = require('./data');

const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/html');


  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageData.title}</title>
    </head>
    <body>
        <h1>${pageData.title}</h1>
        <h2>${pageData.subtitle}</h2>
        <p>${pageData.description}</p>
    </body>
    </html>
  `;

  res.end(htmlContent);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
