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

