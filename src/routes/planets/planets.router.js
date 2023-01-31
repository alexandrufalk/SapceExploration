const express = require("express");

const { getAllPalanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/", getAllPalanets);

module.exports = planetsRouter;
