const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

const createTable = `
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(id)
  )
`;

connection.query(createTable);

app.get('/', (req, res) => {
  const name = 'Full Cycle';
  connection.query(`INSERT INTO people(name) values('${name}')`);

  connection.query('SELECT name FROM people', (err, results) => {
    if (err) {
      return res.send('<h1>Error fetching data</h1>');
    }

    const names = results.map(row => `<li>${row.name}</li>`).join('');
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>${names}</ul>
    `);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
