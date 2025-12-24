exports.healthCheck = (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
};

exports.readinessCheck = (req, res) => {
  res.status(200).json({ ready: true });
};
