const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2] || './database.csv';
    let output = 'This is the list of our students\n';
    await countStudents(databasePath);
    res.send(output);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port);

module.exports = app;