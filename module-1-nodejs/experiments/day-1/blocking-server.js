const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");

  const start = Date.now();

  while (Date.now() - start < 5000) {
    // block for 5 seconds
  }

  res.end("Done");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});