interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Gift",
    lastName: "Richards",
    age: 20,
    location: "Abuja"
};

const student2: Student = {
    firstName: "Alex",
    lastName: "Pierce",
    age: 23,
    location: "Abuja"
};

const studentList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = table.insertRow();
const headerCell1: HTMLTableCellElement = headerRow.insertCell();
const headerCell2: HTMLTableCellElement = headerRow.insertCell();

headerCell1.textContent = 'First Name';
headerCell2.textContent = 'Location';

for (const Student of studentList) {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();

    cell1.textContent = Student.firstName;
    cell2.textContent = Student.location;
}

document.body.appendChild(table);
