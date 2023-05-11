const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  res.send("Hello, staging!");
});

app.listen(3001, () => {
  console.log("Staging server listening on port 3001");
});