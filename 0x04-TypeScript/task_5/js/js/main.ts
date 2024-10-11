// Define MajorCredits interface
export interface MajorCredits {
  credits: number;
  // Add brand property for nominal typing
  brand: 'MajorCredits';
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  // Add brand property for nominal typing
  brand: 'MinorCredits';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}
