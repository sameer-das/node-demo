const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('<h1 style="text-align:center">Application under maintainance!</h1>')
});
app.listen(5000, () => {
  console.log("Server is up @ 5000");
});
