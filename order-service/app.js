const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "order-service",
    message: "Order service is working",
    container: os.hostname()
  });
});

app.listen(3003, () => {
  console.log("Order service running on 3003");
});