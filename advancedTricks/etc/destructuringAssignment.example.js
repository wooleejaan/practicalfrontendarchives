// Destructuring arrays
const [firstItem, secondItem, ...rest] = [1, 2, 3, 4, 5];

// Destructuring objects
const {
  name: username,
  age,
  ...details
} = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
