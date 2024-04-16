# Optional Chaining Operator " ? " ECMAScript 2020

```javascript
const user = {
  name: "John",
  address: {
    city: "New York",
    zipcode: 12345,
  },
};
```

If we want to access this so will do like this Two Way

```javascript
1;
const zipcode = user.address.zipcode; // 12345

2;
const address = user["address"]["zipcode"]; // 12345
```

## But if user.address were to be null or undefined, accessing user.address.zipcode would result in an error.

# So we can check user object have address object empty or undefine or null

```javascript
const name = user.getName?.();
```

# Function Call

```javascript
const user = {
  getName() {
    return "John";
  },
};

const name = user.getName?.(); // "John" if getName exists, undefined otherwise
```

# Array

```javascript
const data = {
  items: [{ name: "Item 1" }, { name: "Item 2" }],
};

const firstItem = data.items?.[0]?.name; // "Item 1" if items and items[0] exist
```

# Chaining Multiple Optional Calls

```javascript
const user = {
  details: {
    address: {
      city: "New York",
    },
  },
};

const city = user.details?.address?.city?.toUpperCase(); // "NEW YORK" if all properties exist
```

# Combining with Nullish Coalescing Operator (??):

```javascript
const user = {
  details: null,
};

const city = user.details?.address?.city ?? "Unknown"; // "Unknown" since user.details is null
```
