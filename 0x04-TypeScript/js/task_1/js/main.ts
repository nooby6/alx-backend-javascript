interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // Allows adding additional properties
}

const teacher3: Teacher = {
  firstName: 'Audrine',
  lastName: 'Whrite',
  fullTimeEmployee: false,
  location: 'Nairobi',
  contract: false,
};

console.log(teacher3);


// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("Audrine", "Whrite"));  // Output: A. Whrite

