var employees = [];

function EmployeeData(name, jobTitle, salary, status) {
  this.Name = name;
  this.Job_Title = jobTitle;
  this.Salary = salary;
  this.Status = status || "Full Time";
}

EmployeeData.prototype.printEmployeeForm = function(){
  console.log( "Name: " + this.Name + "\nJob Title: " + this.Job_Title + " \nSalary: " + this.Salary + " \nStatus: "+ this.Status);
}


var Dennis = new EmployeeData("Dennis", "Badass", "$9001");
var Katrina = new EmployeeData("Katrina", "Hurricane", "$3.50", "Part-Time");
var Jane = new EmployeeData("Jane", "Secretary", "$300,000", "Per-Diem");


employees.push(Dennis);
employees.push(Katrina);
employees.push(Jane);

console.log(employees);
