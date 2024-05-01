function fun() {
  let sum = 0;
  console.log(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

// Better Version

const finalSum = fun(4, 5, 6);
console.log(finalSum);

function func(...num) {
  let sum = 0;
  if (num.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
  }
  return sum;
}
const sumTot = func(40, 20);
console.log(sumTot);
