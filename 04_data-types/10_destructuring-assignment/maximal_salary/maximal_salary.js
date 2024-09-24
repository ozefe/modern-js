let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  if (!salaries) return null;

  let max_salary = 0;
  let max_name = "";
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > max_salary) {
      max_name = name;
      max_salary = salary;
    }
  }

  return max_name;
}

alert(topSalary(salaries));
