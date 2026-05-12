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

// get the oldest age from the array of ages
var ahmed_age = 18;
function canGetCarLicences(age) {
  if (age >= 18) {
    console.log("age can get car licences");
  } else {
    console.log("age can't get car licences");
  }
}
canGetCarLicences(ahmed_age);
var number_1 = 4;
var number_2 = 5;
function takeOneNumber(num) {
  if (num % 2 == 0) {
    console.log("take it as even number");
  } else {
    console.log("take it as not even number");
  }
}
takeOneNumber(number_1);
takeOneNumber(number_2);

function checkDrivingLicense(age, country) {
  var acceptLicense = "Can issue driving license";
  var notAcceptLicense = "Cannot issue driving license";

  function logLicense() {
    console.log(acceptLicense + " at " + country);
  }

  if (!age || !country) {
    console.log("age or country missing");
    return;
  }

  if ((country == "uae" || country == "ksa") && age >= 21) {
    logLicense();
  }
  if (country == "egypt" && age >= 16) {
    logLicense();
  } else if (country == "usa" && age >= 18) {
    // console.log(acceptLicense + " at " + country);
    logLicense();
  } else {
    console.log(notAcceptLicense + " at " + country);
  }
}

checkDrivingLicense();
