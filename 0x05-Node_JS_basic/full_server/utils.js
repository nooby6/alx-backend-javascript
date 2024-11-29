import fs from 'fs';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const result = {};
            const lines = data.trim().split('\n').slice(1); // Skip the header
            lines.forEach((line) => {
                const [firstname, , , field] = line.split(',');
                if (!result[field]) result[field] = [];
                result[field].push(firstname);
            });
            resolve(result);
        });
    });
};

