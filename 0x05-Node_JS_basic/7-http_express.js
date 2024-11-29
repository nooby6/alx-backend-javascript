const express = require('express');
const fs = require('fs').promises;

function parseData(data) {
  const lines = data.split('\n').slice(1);
  const stats = {};
  let students = 0;
  lines.forEach((line) => {
    if (line.length) {
      students += 1;
      const parts = line.split(',');
      const firstName = parts[0];
      const field = parts[3];
      // eslint-disable-next-line no-prototype-builtins
      if (stats.hasOwnProperty(field)) {
        stats[field].push(firstName);
      } else {
        stats[field] = [firstName];
      }
    }
  });
  return [students, stats];
}

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (error) {
    return 'Cannot load the database';
  }
  const [students, fields] = parseData(data);
  let resp = `Number of students: ${students}\n`;
  for (const [field, members] of Object.entries(fields)) {
    resp += `Number of students in ${field}: ${members.length}. List: ${members.join(', ')}\n`;
  }
  return resp;
}

let studentData;
countStudents(process.argv[2]).then((data) => {
  studentData = data;
});

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send(`This is the list of our students\n${studentData}`);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
