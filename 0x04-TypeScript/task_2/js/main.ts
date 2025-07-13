interface DirectorInnterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInnterface {
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have  a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary:string | number): Director | Teacher {
    if (typeof salary === "number" && salary < 500){
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$200'));

function isDirector(employee: Director | Teacher): employee is Director{
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(600)));

type Subjects = "Math" | "History"

let todayClass: Subjects;

function teachClass(todayClass: string) {
    if (todayClass === "Math") {
        return "Teaching Math"
    } else {
        return "Teaching History"
    }
}

console.log(teachClass("History"));

console.log(teachClass("Math"));