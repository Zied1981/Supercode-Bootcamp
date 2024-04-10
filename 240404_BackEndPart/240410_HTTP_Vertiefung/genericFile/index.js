const http = require("http");
const fs = require("fs");
const { readFile } = require("./filesyst.js");
const errorPage = fs.readFileSync("./public/pages/error.html");

const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);
  if (request.method !== "GET") {
    response.end(errorPage);
    return;
  }

  const filePath =
    request.url === "/" || request.url === "/home"
      ? "./public/pages/home.html"
      : `./public${request.url}`;
  //request.url= /images/kanne.png

  readFile(filePath)
    .then((dataBuffer) => {
      response.write(dataBuffer);
      response.end();
    })
    .catch((err) => {
      const FileNotFound = "ENOENT";
      if (err.code === FileNotFound) {
        response.writeHead(404);
      } else {
        console.log(err);
        response.writeHead(500);
      }
      response.end(errorPage);
    });
});
const PORT = 3000;
server.listen(PORT, () => console.log("server ready at", PORT));
