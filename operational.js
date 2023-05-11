const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);
  res.send("Hello, operational!");
});

app.listen(3000, () => {
  console.log("Operational server listening on port 3000");
});
