const express = require("express");

const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

server.get("/", (request, response) => {
  const year = new Date().getFullYear();
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
        <link rel='stylesheet' href='/style.css'>
      </head>
      <body>
        <h1>Hello, it's ${year}</h1>
      </body>
    </html>
  `);
});

server.get("/search", (request, response) => {
  const keyword = request.query.keyword;
  response.send(`<p>You searched for ${keyword}</p>`);
});

server.get("/uh-oh", (request, response) => {
  response.status(500).send("something went wrong");
});

server.get("/users/:name", (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

module.exports = server;
