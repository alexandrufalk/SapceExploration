const planets = require("../../models/planets.model");

function getAllPalanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPalanets,
};
