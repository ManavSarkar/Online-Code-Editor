const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.static("public"));
app.set("view engine", "hbs");

app.use("/code_compiler", require("./routes/code_executer"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening on port ${port} http://localhost:${port}`);
});
