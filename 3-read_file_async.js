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

module.exports = async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const [students, fields] = parseData(data);
  console.log(`Number of students: ${students}`);
  for (const [field, members] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${members.length}. List: ${members.join(', ')}`);
  }
};