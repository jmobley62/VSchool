let employees = [];

function Employee(name, jobTitle, salary, status) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = "Full Time";
}

let john = new Employee("John", "Manager", "$100,000");
let jane = new Employee("Jane", "CEO", "$200,000");
let jill = new Employee("Jill", "Janitor", "$50,000", "Part Time");

jill.status = "Contract";
employees.push(john, jane, jill);

console.log(employees);
