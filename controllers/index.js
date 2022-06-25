const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homepage-routes.js");
// const dashBoardRoutes = require("./dashboard-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/dashboard", dashBoardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
