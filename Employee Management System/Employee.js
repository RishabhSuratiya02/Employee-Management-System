// script.js

// Get DOM elements
const form = document.getElementById('employee-form');
const empId = document.getElementById('emp-id');
const empName = document.getElementById('emp-name');
const empDepartment = document.getElementById('emp-department');
const empSalary = document.getElementById('emp-salary');
const employeeTable = document.getElementById('employee-table').getElementsByTagName('tbody')[0];


form.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const id = empId.value;
    const name = empName.value;
    const department = empDepartment.value;
    const salary = empSalary.value;

    const row = employeeTable.insertRow();

    row.insertCell(0).textContent = id;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = department;
    row.insertCell(3).textContent = salary;

   
    const deleteBtnCell = row.insertCell(4);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        row.remove();
    };
    deleteBtnCell.appendChild(deleteBtn);

    
    form.reset();
});
