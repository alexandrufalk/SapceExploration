const express = require("express");

const {
  httpgetAllLaunches,
  httpAddNewLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
launchesRouter.get("/", httpgetAllLaunches);

launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
