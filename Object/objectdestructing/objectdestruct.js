// const obj = {
//   username: { first: "vishal", last: "kumar" },
//   age: 26,
//   address: { permament: "Khusrupur", residental: "Lodipur" },
// };

//Wrong way
const newobj = { firstName: "vishal", lastname: "kumar", address: "patna" };
const { first, last, location } = newobj;
console.log("NAME", first);
console.log("LOCATION", location);

//*****Correct way */

const newobj2 = {
  firstname1: "himanshu",
  lastname1: "kumar",
  address: "hazaribag",
};
const { firstname1: fName, lastname1: lName } = newobj2;
console.log(fName);
console.log(lName);

//default Value

const {
  firstname1: firstName,
  lastname = "kumar",
  address: location2,
} = newobj2;
console.log(`${firstName} ${lastname} from ${location2}`);
