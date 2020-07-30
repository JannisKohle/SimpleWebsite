const express = require('express');
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("./html/homepage.html", "utf8", (err, content) => {
      if (err) {
          res.send(err);
      };
      res.send(content);
  });
});

app.listen(3000, () => console.log("website running on port 3000"));
