const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const rows = data.split('\n').filter(row => row.trim() !== '');

    if (rows.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = rows[0].split(',');
    const studentCounts = {};

    rows.slice(1).forEach((row) => {
      const fields = row.split(',');

      if (fields.length !== headers.length) {
        return;
      }

      headers.forEach((header, index) => {
        if (!studentCounts[header]) {
          studentCounts[header] = [];
        }
        studentCounts[header].push(fields[index]);
      });
    });

    const totalStudents = rows.slice(1).length;

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentCounts) {
      console.log(`Number of students in ${field}: ${studentCounts[field].length}. List: ${studentCounts[field].join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

