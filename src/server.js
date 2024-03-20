import http from "node:http";

// Criar um usuário
const server = http.createServer((req, res) => {
  return res.end("Hello world");
});

server.listen(3333);
