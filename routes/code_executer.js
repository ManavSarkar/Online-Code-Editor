const express = require("express");
const router = express();
const bodyParser = require("body-parser");
var request = require("request");

// create application/json parser
var jsonParser = bodyParser.json();

router.get("/", (req, res) => {
  res.redirect("/code_compiler/" + req.query.programming_language);
});

router.get("/:lang", (req, res) => {
  res.render("editor", { lang: req.params.lang });
});

router.post("/exec/:lang", jsonParser, (req, res) => {
  var program = {
    script: req.body.script,
    language: req.params.lang,
    stdin: req.body.stdin,
    versionIndex: "0",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };
  var result = "";
  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: program,
    },
    function (error, response, body) {
      result = body;
      if (error) {
        console.log(error);
      }
      res.json(result);
    }
  );
});
module.exports = router;
