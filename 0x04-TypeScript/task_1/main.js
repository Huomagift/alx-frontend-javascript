var teacher1 = {
    firstName: 'Jane',
    lastName: 'Darsey',
    fullTimeEmployee: true,
    yearsOfExperience: 2,
    location: 'Chile',
    contract: true
};
var teacher2 = {
    firstName: 'Pete',
    lastName: 'Allen',
    fullTimeEmployee: false,
    yearsOfExperience: 6,
    location: 'Hawkins',
    specialty: 'Mathematics'
};
console.log(teacher1, teacher2);
;
var director1 = {
    firstName: 'Anne',
    lastName: 'Keating',
    location: 'Sudan',
    fullTimeEmployee: true,
    numberOfReports: 4,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ".").concat(lastName);
}
// printTeacher("Jane", "Doe");
console.log(printTeacher("Jane", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
