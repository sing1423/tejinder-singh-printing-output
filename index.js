let a = 3;
let b = 5;
let c;

let output; 
// task description
output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '---------\n';

// using operators
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += 'a += b = ' + (a += b) + '\n';
output += 'a -= b = ' + (a -= b) + '\n';
output += 'a *= b = ' + (a *= b) + '\n';
output += 'a /= b = ' + (a /= b) + '\n';
output += 'a %= b = ' + (a %= b) + '\n';
output += 'a == b = ' + (a == b) + '\n';
output += 'a != b = ' + (a != b) + '\n';
output += 'a > b = ' + (a > b) + '\n';
output += 'a < b = ' + (a < b) + '\n';
output += '!a && !c = ' + (!a && !c) + '\n';
output += '!a || !c = ' + (!a || !c) + '\n';


alert(output);


// Task 2

// Declare the variable first_name and assign it with the value of your first name;
// Declare the variable last_name and assign it with the value of your last name;
// Declare the variable email and assign it with the value of your email;
// Declare the variable output;
// Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence
 // reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
// Assign output with gotten expression;
// Print the output in JavaScript console.

let firstName = 'Tejinder';
let lastName = 'singh';
let email = 'sing1423@algonquinlive.com';

output = ` My name is ${firstName} ${lastName} . You can contact me at ${email}.`;

console.log(output);


