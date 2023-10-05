interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let studentsList: Student[] = [
  {firstName: 'David', lastName: 'Mark', age: 20, location: 'Lagos'},
  {firstName: 'Nora', lastName: 'Smth', age: 22, location: 'Abuja'}
];

let table = document.createElement('table');

studentsList.forEach((student) => {
  let row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
