# replace() with String

### replace method is a string method in javascript and it use to replace specfic character word or string and it returned a new string with updated value but it did not change original string

## replaceAll method come from replace method thats why use case of replace method will be applicable for replaceAll()


# replace()

```javascript
 const str="I felt happy because I saw the others were happy and because I knew I should feel happy"

    const changedStr=str.replace("happy","sad")
    console.log(str)
    /*
      I felt happy because I saw the others were happy and because I knew I should feel happy
     */
    console.log(changedStr)
    /*I felt *sad because I saw the others were happy and because I knew I should feel happy
```
## here we can see just once time word changed happy to sad rest of left.

# replaceAll()

It will replace all character or word just like using regex syntax

```javascript
const str="I felt happy because I saw the others were happy and because I knew I should feel happy"

    const changedStr=str.replaceAll("happy","sad")
    console.log(str)
    /* I felt happy because I saw the others were happy and because I knew I should feel happy */

    console.log(changedStr)
    /* I felt *sad because I saw the others were *sad and because I knew I should feel *sad
```

# Without replaceAll()

```javascript
const changedStr=str.replace(/happy/g,"sad")
    console.log(changedStr)
    /* I felt sad because I saw the others were sad and because I knew I should feel sad
```

# without replaceAll() but change all upper and lower case characters

```javascript
const str="The moon is natural in the earth";
    const changedstr=str.replace(/the/gi,"A");
    
    console.log(changedstr)
    /*A moon is natural in A earth

    i for ignore case
```

# replace with bunch of words with one or two word

```javascript

const str="The moon is natural in the earth";
    const changedstr=str.replace("is natural","best");

    console.log(changedstr)
    /* The moon best in the earth
```
# replace words with new words

```javascript
const str="The moon is natural in the earth";
    const changedstr=str.replace("is natural in","danger on");

    console.log(changedstr)
/* The moon danger on the earth

```
# Two words at different Place replace with other words

### Trick: Chaining

```javascript

    const str="I felt happy because I saw the others were happy and because I knew I should feel happy"

const changedstr=str.replaceAll("happy","sad").replaceAll("I","We");

console.log(changedstr)
/* We felt sad because We saw the others were sad and because We knew We should feel sad
```
# replace() with returned word from Function

```Javascript

    const str="I felt happy because I saw the others were happy and because I knew I should feel happy"

const changedstr=str.replace("felt",(wordHolderParameter)=>{
    const Capital=wordHolderParameter.toUpperCase()
    return Capital
})
console.log(changedstr)
/*
I FELT happy because I saw the others were happy and because I knew I should feel happy

```