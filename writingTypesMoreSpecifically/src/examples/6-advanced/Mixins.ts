// Mixins are a way of combining classes in TypeScript, consisting of multiple
// smaller parts, called mixin classes. They allow you to reuse and share
// behavior between different classes, promoting modularity and code reusability.

// 1. Define mix-ins
// To define a mixin class, create a class that extends a generic type parameter 
// with a constructor signature. This allows mixin classes to be combined with other classes.

// a mixin class called TimestampMixin that adds a getTimestamp method that returns 
// the current date and time. A mixin class extends TBase with a generic type parameter 
// with a constructor signature to allow it to be composed with other classes.
class TimestampMixin<TBase extends new (...args: any[]) => any>(Base: TBase) {
    constructor(...args: any[]) {
      super(...args);
    }
  
    getTimestamp() {
      return new Date();
    }
  }

// 2. Use mixins
// To use a mixin class, define a base class and extends apply the mixin class to it using the keyword.

// a base class called MyBaseClass, which contains a displayValue method. We then created a new class 
// called MyMixedClass that extends the base class and applies the TimestampMixin mixin class to it.
class MyBaseClass {
    constructor(public value: number) {}
  
    displayValue() {
      console.log(`The value is: ${this.value}`);
    }
  }
  class MyMixedClass extends TimestampMixin(MyBaseClass) {
    constructor(value: number) {
      super(value);
    }
  }

  const instance = new MyMixedClass(42);
instance.displayValue(); // Output: The value is: 42
const timestamp = instance.getTimestamp();
console.log(`The timestamp is: ${timestamp}`); // Output: The timestamp is: [current date and time]
