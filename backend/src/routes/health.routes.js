const router = require("express").Router();
const controller = require("../controllers/health.controller");

router.get("/health", controller.healthCheck);
router.get("/ready", controller.readinessCheck);

module.exports = router;
