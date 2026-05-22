const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "auth-service",
    message: "Auth service is working",
    container: os.hostname()
  });
});

app.listen(3001, () => {
  console.log("Auth service running on 3001");
});