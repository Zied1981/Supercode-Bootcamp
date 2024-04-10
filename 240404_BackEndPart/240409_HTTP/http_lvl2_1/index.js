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
  } else if (req.method === "GET" && req.url === "/image") {
    readFile("./public/images/ilustracion1.png")
      .then((dataBuffer) => {
        res.write(dataBuffer);
        res.end();
      })
      .catch((err) => {
        console.log(err);
        res.end("Internal Server Error!");
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

/* const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  const filePath =
    request.url === "/" || request.url === "/home"
      ? "index.html"
      : ${request.url.slice(1)}.html;

  if (request.url !== "/favicon.ico") {
    readFileFunc(./pages/${filePath})
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end('<a href="/home">Home</a>');
      });
  }
});

const PORT = 270;
server.listen(PORT, () => console.log("server ready at port", PORT)); */
