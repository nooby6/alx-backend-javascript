// Step 1: Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Step 2: Create two students
const student1: Student = {
    firstName: "Audrine",
    lastName: "Whrite",
    age: 22,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Omuodo",
    lastName: "Teddy",
    age: 22,
    location: "Mombasa"
};

// Step 3: Add students to an array
const studentsList: Student[] = [student1, student2];

// Step 4: Create a table using Vanilla JS
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

