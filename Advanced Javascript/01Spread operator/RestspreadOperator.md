# Rest operator
Rest operator accept multible value as parameter

# Rest operator 
```javascript
fun(2,34,6,10) /*arguments */ => function fun(a,b,...other ) /*parameters */
console.log(other)// 6,10
```
# Indivisual Value access through Rest Operator
```javascript
function numbrs(a,b,c,...other){
    console.log(other[0])//12

}
numbrs(4,5,6,12,20)
```
## first access all the value through one variable (placeholder of parameter)
```javascript
function fun (...numbrs){
    console.log(numbrs) //1,2,3,4
}

fun(1,2,3,4)
```
## we noticed number can access index value mean its array so we can apply all array methods
```javascript
function numbers(...other){
        const res=other.map((num)=>{
            return num*2
        })
        console.log(res) // (6) [8, 12, 10, 6, 4, 8]
    }
    numbers(4,6,5,3,2,4)
```
# Earlier ES5 there is arguments operator just like now rest operator but we cannot apply array method
# we can access indiviual elements through arguments but apply any array methods
```javascript
function numbers(...other){
        const num=arguments[1]
       console.log(num);
    }
    numbers(4,6,5,3,2,4)
```

The arguments object in JavaScript is an array-like object that contains all the arguments passed to a function. However, it's not a real array, so it doesn't have array methods like map, filter, etc. In ES6 (ECMAScript 2015)

# Spread Operator


```javascript
const students=["harsh","himanshu","sanskar"]
    function get(name1,name2,name3){
        console.log(name1,name2,name3) //harsh himanshu sanskar
    }
    get(...students)// spread opertor with array
```

# combination of rest and sprade operator
```javascript
const num=[2,3,4,5,6];

    function fun(...holder) // holder with rest operator
    {
        const res=holder.map((num)=>  num*2)
        console.log(res) //(5) [4, 6, 8, 10, 12]
    }
    fun(...num) // num array with spread operator
```
```javascript
const students=["harsh","himanshu","sanskar"]
    function get(...name) //rest oper
    {
        console.log(name) // (3) ['harsh', 'himanshu', 'sanskar']
        console.log(...name) // harsh himanshu sanskar
    }
    get(...students)// spread opertor with array
```
## At the end rest operator hold array {just like Many to one}
## spread operator spread elements in indivisual { just like one to many }

As regular if we want value from object we can access through ". " or [" "]
but we can desturct object 
```javascript
const students={
    name:"vishal".
    age:25.
    hobby:"Table tennis"
}

const {name,age}=students

console.log(name)//vishal
console.log(age)//25
```
# Rest with object

```javascript
const students={
    name:"vishal",
    age:25,
    hobby:"Table tennis"
}

const {...alldata}=students

console.log(alldata)
```
# spread with object
```javascript
const students={
    name:"vishal",
    age:25,
    hobby:"Table tennis"
}

const update={
    ...students
}
console.log(update) // {name: 'vishal', age: 25, hobby: 'Table tennis'}

```
## problem: Update age value

```javascript
const students={
    name:"vishal",
    age:25,
    hobby:"Table tennis"
}

const data={
    ...students,
    age:30
}
console.log(data) //{name: 'vishal', age: 30, hobby: 'Table tennis'}
```