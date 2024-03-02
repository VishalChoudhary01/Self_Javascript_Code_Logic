/*
Array destructuring is a feature that allows you to unpack values from arrays 
or properties from objects into distinct variables.
*/
//Contiously assign value in variable
const arr = [20, 12, 36, 42, 11];
const [num1, num2, num3] = arr;
console.log("number 1", num1);
console.log("number 2", num2);
console.log("number 3", num3);

//left space between new varible value assign in the way
//mean value will assign every comma " ,"

const fruits = ["mango", "orange", "litchi", "pineapple", "grape", "apple"];
const [bucket1, , bucket2, bucket3] = fruits;
console.log("bucket 1 Fruits=>", bucket1);
console.log("bucket 2 Fruits=>", bucket2);
console.log("bucket 3 Fruits=>", bucket3);

//assign value from destructing arr using rest operator
//***** rest operator must be in last

const numbers = [20, 30, 40, 50, 60, 70];
const [numb1, numb2, ...numb3] = numbers;
console.log("Number 1 Bucket", numb1);
console.log("Number 1 Bucket", numb2);
console.log("Number 1 Bucket", numb3);

/*
Spread Operator (...)
The spread operator is used to expand elements of an array or properties of an object.
 It allows you to easily clone arrays or merge objects

******

Rest Operator (...)
The rest operator is used to represent an indefinite number of arguments as an array.
It collects the remaining elements of an array or properties of an object into a single variable.
 */
