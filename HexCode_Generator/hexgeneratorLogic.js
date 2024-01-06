// const hex="VISHAL";
// console.log(hex[0]);
//same logic will create hex number

// for (let index = 0; index <= 6; index++) {
//   // console/console.log("a");
//   let color = "#";
//   const hex = "0123456789ABCDEF";

//   console.log((color = color + hex[Math.floor(Math.random() * 16)]));
//   console.log(hex[Math.floor(Math.random() * 16)]);
// }

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color
};
console.log(`Hex Color Generated:${randomColor()}`);


const loo="12345678";
let color1="#";
for(let i=1;i<=4;i++){
    color1=color1+loo[Math.floor(Math.random()*8)]
}
console.log(color1)
//its will print last loop conditon mean fourth loop





