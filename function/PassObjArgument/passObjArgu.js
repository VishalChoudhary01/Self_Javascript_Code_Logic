function objpassArgu(acceptObj = {}) {
  console.log(acceptObj);
}

objpassArgu({ name: "vishal", age: 26 });
objpassArgu();

let objectReturn = function (...acceptobj1butgetArr) {
  console.log(acceptobj1butgetArr);
};

objectReturn([20, 30, 42]);
//function chaining
