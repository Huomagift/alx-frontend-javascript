interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // allows any additional attributes
}

const teacher1: Teacher = {
    firstName: 'Jane',
    lastName: 'Darsey',
    fullTimeEmployee: true,
    yearsOfExperience: 2,
    location: 'Chile',
    contract: true
}

const teacher2: Teacher = {
    firstName: 'Pete',
    lastName: 'Allen',
    fullTimeEmployee: false,
    yearsOfExperience: 6,
    location: 'Hawkins',
    specialty: 'Mathematics'
}

console.log(teacher1, teacher2);

interface Directors {
    firstName: string,
    lastName: string,
    location: string,
    fullTimeEmployee: boolean,
    numberOfReports: number,
};

const director1: Directors = {
    firstName: 'Anne',
    lastName: 'Keating',
    location: 'Sudan',
    fullTimeEmployee: true,
    numberOfReports: 4,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}.${lastName}`;
}
// printTeacher("Jane", "Doe");
console.log(printTeacher("Jane", "Doe"));

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName():string {
        return this.firstName;
    }
}

const student: StudentClassInterface = new StudentClass("John", "Doe");

console.log(student.displayName());      // John
console.log(student.workOnHomework());  // Currently working

