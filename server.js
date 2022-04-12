const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
var hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials/", function () {
  console.log("Partials registered");
});
require("dotenv").config();
app.use(cors());
app.use(express.static("public"));
app.set("view engine", "hbs");

app.use("/code_compiler", require("./routes/code_executer"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Listening onport ${port} http://localhost:${port}`);
});
