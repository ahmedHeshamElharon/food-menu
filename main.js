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

  function logLicense(isAccepted) {
    // closure function to log the license acceptance message
    if (isAccepted) {
      console.log(acceptLicense + " at " + country);
    } else {
      console.log(notAcceptLicense + " at " + country);
    }
  }

  if (!age) {
    console.log("age is missing");
    return;
  }
  if (!country) {
    console.log("Country is missing");
    return;
  }

  if ((country == "uae" || country == "ksa") && age >= 21) {
    logLicense(true);
  }
  if (country == "egypt" && age >= 16) {
    logLicense(true);
  } else if (country == "usa" && age >= 18) {
    // console.log(acceptLicense + " at " + country);
    logLicense(true);
  } else {
    logLicense(false);
  }
}

const changeTemperatureType = function (degree, type) {
  let result = {};
  if (!degree || isNaN(degree)) {
    console.error("Please provide a valid degree");
    return;
  }
  if (type != "celsius" && type != "fahrenheit") {
    console.error(
      "Invalid temperature type provided, please provide either celsius or fahrenheit",
    );
    return;
  }

  if (type === "fahrenheit") {
    result.degree = (degree * 9) / 5 + 32;
    result.type = "fahrenheit";
  } else {
    result.degree = ((degree - 32) * 5) / 9;
    result.type = "celsius";
  }
  return result;
};

// update the dom
const tempValue = document.getElementById("tem-output-value");
const tempType = document.getElementById("tem-output-type");
const example = changeTemperatureType(-30, "celsius");
tempValue.innerText = example.degree;
tempType.innerText = example.type;
console.log(example);

const student = {
  name: "Ahmed Hesham",
  age: 28,
  section: "Engineering",
  grade: 4,
  degree: "Very good",
};
