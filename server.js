const http = require("http");
const app = require("./src/index");
require("dotenv/config");

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const startServer = () => {
  server.listen(PORT, () => {
    if (process.env.ENV === "development") {
      console.log(`🟢 Server running on port ${PORT}`);
    }
  });
};

startServer();
