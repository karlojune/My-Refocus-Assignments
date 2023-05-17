function calculateBMI(kg, cm) {
  let m = cm * 0.01;
  return kg / (m * m);
}
console.log(`Your BMI is : ${calculateBMI(68, 169).toFixed(2)}`);
// console.log(calculateBMI(68, 165));
