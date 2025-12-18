const nameStudent = "hammad";
console.log(
  `Hello, ${nameStudent}! Welcome to the JavaScript world.`,
  "Type:",
  typeof nameStudent
);

let ageStudent = 20;
console.log(`You are ${ageStudent} years old.`, "Type:", typeof ageStudent);

let isStudent = true;
console.log(`Is student: ${isStudent}`, "Type:", typeof isStudent);

let skills = ["React js", "Node js", "JavaScript"];
console.log("Skills:", skills, "Type:", typeof skills);

let info = {
  name: "Hammad",
  city: "Rahim Yar Khan",
  email: "hammadchoudharry@gmail.com",
};
console.log("Info:", info, "Type:", typeof info);

//try to change the const variable and see what happens
//nameStudent = "Ali"; //Error comes of the Assignment to constant variable

//update Age by adding 1
ageStudent = ageStudent + 1;
console.log(`Next year, you will be ${ageStudent} years old.`);

//add a new skill to the skills array
skills.push("Tailwind CSS");
console.log("Updated Skills:", skills);

//add a new property to the info object
info.number = "123-456-7890";
console.log("Updated Info: ", info);

// create a variable that stores null
let futureGoal = null;
console.log("Future Goal:", futureGoal, "Type:", typeof futureGoal);
// and null type is object due to a bug in javascript but its originally meant to represent 'no value' and its a primitive value

//create a variable that is undefined
let undefinedValue;
console.log("Undefined Value:", undefinedValue, "Type:", typeof undefinedValue);

// difference between null and undefined
// null is the empty value while undefined means a variable has been declared but not yet assigned a value.

Array.isArray(skills);
console.log("Is skills an array?", Array.isArray(skills)); // yes true
