const http = require("http");

require("dotenv").config();

const app = require("./app");

const { loadPalnetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8005;
console.log("PORT", PORT);
const server = http.createServer(app);

async function startServer() {
  await loadPalnetsData();

  server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}..`);
  });
}

startServer();
