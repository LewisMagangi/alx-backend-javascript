const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.toString().split('\n').slice(1).filter((line) => line.trim() !== '');

    console.log(`Number of students: ${lines.length}`);

    const obj = {};
    lines.forEach((el) => {
      const student = el.split(',');
      const field = student[3].trim(); // Trim to remove any whitespace
      if (!obj[field]) obj[field] = [];
      obj[field].push(student[0]);
    });

    for (const cls in obj) {
      if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
    }

    return lines.length;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
