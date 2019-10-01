const faker = require("faker");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "mailing_list",
  port: 3306
});

let data = [];
let addUsers = 500;

for (let i = 0; i < addUsers; i++) {
  data.push([
    faker.internet.email(),
    faker.date.past(),
    faker.address.country()
  ]);
}

const person = {
  email: faker.internet.email(),
  created_at: faker.date.past(),
  countryoforigin: faker.address.country()
};

let q = "INSERT INTO USERS (email, created_at, countryoforigin) VALUES ?";

connection.query(q, [data], (err, result, fields) => {
  if (err) throw err;
  console.log(result);
});

connection.end();

// var q = "Select 1 + 1 AS solution";
// connection.query(q, (err, results, fields) => {
//   if (err) throw err;
//   console.log(`The solution is: ${results[0].solution}`);
// });
