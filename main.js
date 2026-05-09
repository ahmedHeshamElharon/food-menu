// variables and Data types

var name = "Mohammed"; // string;
var age = 34; // number;
var isMale = true; // boolean
var isStudent = false; // boolean
var unknown = undefined;
var isNull = null;
console.log(name, " is ", age, " old");
console.log(age + age);

function printAge(rName, rAge) {
  console.log(rName + " age is " + rAge);
}
printAge("Ahmed", "30");

function sumNums(num1, num2) {
  console.log(num1 + num2);
}

sumNums(age, 3);
