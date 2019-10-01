const express = require("express");
const mysql = require("mysql");
const faker = require("faker");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "mailing_list",
  port: 3306
});

//sql string squery
// const q = "SELECT COUNT(*) AS count FROM users WHERE email LIKE ?";

// app.get("/", (req, res) => {
//   connection.query(q, ["%gmail%"], (err, results) => {
//     if (err) throw res.send("Error Error Error!!");
//     let count = results[0].count;
//     res.send(`We have ${count} users in our mailing list`);
//   });
// });

const q = "SELECT COUNT(*) AS count FROM users";

app.get("/", (req, res) => {
  connection.query(q, (err, results) => {
    if (err) throw res.send("Error Error Error!!");
    let count = results[0].count;
    res.send(`We have ${count} users in our mailing list`);
  });
});

app.get("/joke", (req, res) => {
  console.log("joke sent");
  res.send("Here's a funny joke!");
});

app.get("/random_num", (req, res) => {
  console.log("you're random number is ");
  let num = Math.floor(Math.random() * 10 + 1);
  res.send(`Your lucky number is ${num}`);
});

app.listen(8080, () => {
  console.log("server running on 8080");
});
