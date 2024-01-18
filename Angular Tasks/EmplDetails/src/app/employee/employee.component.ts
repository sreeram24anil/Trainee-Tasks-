import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeDetails = [
    { empId: 1, empName: 'Sairaj', designation: 'Developer', date: '2022-01-15', address: '123 Main St', salary: 50000 },
    { empId: 2, empName: 'Manoj', designation: 'Designer', date: '2022-02-28', address: '456 Oak St', salary: 60000 },
    { empId: 3, empName: 'Ramesh', designation: 'Manager', date: '2022-03-10', address: '789 Maple St', salary: 70000 },
    { empId: 4, empName: 'Suresh', designation: 'Analyst', date: '2022-04-22', address: '101 Pine St', salary: 55000 },
    { empId: 5, empName: 'Ravi', designation: 'Tester', date: '2022-05-05', address: '202 Cedar St', salary: 65000 },
    { empId: 6, empName: 'Sam', designation: 'Engineer', date: '2022-06-18', address: '303 Elm St', salary: 75000 },
    { empId: 7, empName: 'Ram', designation: 'Architect', date: '2022-07-01', address: '404 Birch St', salary: 80000 },
    { empId: 8, empName: 'Jai', designation: 'Coordinator', date: '2022-08-14', address: '505 Walnut St', salary: 58000 },
    { empId: 9, empName: 'Kamal', designation: 'Supervisor', date: '2022-09-26', address: '606 Pineapple St', salary: 72000 },
    { empId: 10, empName: 'Mona', designation: 'Consultant', date: '2022-10-07', address: '707 Banana St', salary: 67000 }
  ];



showSalary = true;

toggleSalaryVisibility() {
  this.showSalary = !this.showSalary;
}
}