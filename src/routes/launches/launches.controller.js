const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

console.log("controler launches", getAllLaunches());

function httpgetAllLaunches(req, res) {
  //   return res.status(200).json(Array.from(launches.values()));
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(res, req) {
  const launch = req.req.body;
  console.log("launch mission", launch);

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res.res.status(400).json({
      error: "Missing required launch property",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }

  addNewLaunch(launch);
  return res.res.status(201).json(launch);
}

module.exports = {
  httpgetAllLaunches,
  httpAddNewLaunch,
};
