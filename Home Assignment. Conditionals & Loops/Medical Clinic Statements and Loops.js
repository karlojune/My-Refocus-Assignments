let birth_month = 3;
var current_month = new Date().getMonth();
let birth_year = 1994;
var current_year = new Date().getFullYear();
var age = current_year - birth_year;

if (birth_month >= current_month) {
  console.log(`Patients Accurate Age: ${age - 1}`);
} else {
  console.log(`Patients Accurate Age: ${age}`);
}
