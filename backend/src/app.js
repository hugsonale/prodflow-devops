const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger");
const healthRoutes = require("./routes/health.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/v1", healthRoutes);
app.use(errorMiddleware);

module.exports = app;
