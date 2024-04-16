Earlier we check and assign new value in variable

Like this:-
```javascript

const obj1={
    name:"vishal",
    age:24,
    location:"delhi"
}

const obj2={
    name:"Monal",
    age:25,
}

obj2.location= obj2.location || "Patna"

console.log(obj2);

/* {name: 'Monal', age: 25, location: 'Patna'}
```
# logical Assignment " ||= " is shorthand for regular way  checking and assigning value

```javascript
const obj2={
    name:"Monal",
    age:25,
}

obj2.address ||= "Patna"

console.log(obj2);
```
# logical assignment with " &&= "

## &&= first check if the property available then update new value with property

## Note -> if there empty string then it will not assign new value
