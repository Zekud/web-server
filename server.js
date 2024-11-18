const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  res.send("Zekariyas Kumsa");
});

app.get("/hobby", (req, res) => {
  res.json({ hobby: "Football" });
});

app.get("/dream", (req, res) => {
  res.send("Software Engineer");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
