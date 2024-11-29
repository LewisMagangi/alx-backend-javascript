const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2] || './database.csv';
      res.write('This is the list of our students\n');
      await countStudents(databasePath);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  }
});

module.exports = app;

app.listen(1245);
