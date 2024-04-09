const http = require("http");
const { readFile } = require("./filesyst.js");

const server = http.createServer((req, res) => {
  console.log("new req", req.method, req.url);

  if (req.method === "GET" && (req.url === "/" || req.url === "/home")) {
    readFile("./public/pages/home.html")
      .then((dataBuffer) => {
        res.write(dataBuffer);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.end("Intern server Error ");
      });
  } else if (req.method === "GET" && req.url === "/about") {
    readFile("./public/pages/about.html")
      .then((dataBuffer) => {
        res.write(dataBuffer);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.end("Intern Server Error!");
      });
  } else if (req.method === "GET" && req.url === "/contact") {
    readFile("./public/pages/contact.html")
      .then((dataBuffer) => {
        res.write(dataBuffer);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.end("Intern Server Error!");
      });
  } else if (req.method === "GET" && req.url === "/faq") {
    readFile("./public/pages/faq.html")
      .then((dataBuffer) => {
        res.write(dataBuffer);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.end("Intern Server Error!");
      });
  } else {
    readFile("./public/pages/error.html")
      .then((dataBuffer) => {
        res.write(dataBuffer);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.end("Internal Server Error!");
      });
  }
});
const PORT = 3000;
server.listen(PORT, () => console.log("server ready", PORT));
