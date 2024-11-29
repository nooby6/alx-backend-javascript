import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        const databaseFile = process.argv[2];
        try {
            const students = await readDatabase(databaseFile);
            let response = 'This is the list of our students\n';
            const fields = Object.keys(students).sort();

            fields.forEach((field) => {
                response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });
            res.status(200).send(response.trim());
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const databaseFile = process.argv[2];

        if (!['CS', 'SWE'].includes(major)) {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(databaseFile);
            const list = students[major] || [];
            res.status(200).send(`List: ${list.join(', ')}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
