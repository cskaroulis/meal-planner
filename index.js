const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use("/api/users", require("./api/users"));

//Route to Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

//Route to LoginPage
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

//Handle the Post request for login
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let status;
  // TODO: make a db call to check credentials
  if (username === "cskaroulis" || username === "pskaroulis") {
    status = password === "health" ? 200 : 401;
  }
  res.sendStatus(status);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`this app is listening on port ${PORT}`));
