const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'))

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("editor");
});

app.listen(port, () => {
  console.log(`Listening on port ${port} http://localhost:${port}`);
});
