const handler = {
  get: (target, prop) => {
    console.log(`Accessing property: ${prop}`);
    return target[prop];
  },
};

const targetObj = { name: "John", age: 30 };

/**
 * @description
 * The proxy object allows you to create custom behavior for basic object operations.
 * It allows you to intercept and modify object operations.
 * ‘object, such as accessing properties, assigning, and calling methods.
 */
const proxyObj = new Proxy(targetObj, handler);

console.log(proxyObj.name); // Output: Accessing property: name \n John
