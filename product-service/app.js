const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "product-service",
    message: "Product service is working",
    container: os.hostname()
  });
});

app.listen(3002, () => {
  console.log("Product service running on 3002");
});