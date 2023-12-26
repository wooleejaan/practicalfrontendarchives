// In TypeScript, namespaces are a way to organize and group related code.
// They help you avoid naming conflicts and promote modularity by
// encapsulating code that belongs together. Namespaces can contain classes,
// interfaces, functions, variables, and other namespaces.

// 1. Define namespace
// a MyNamespace namespace called and add a class in it MyClass.
// Note that we use export the keyword to make the class accessible outside the namespace.
namespace MyNamespace {
  export class MyClass {
    constructor(public value: number) {}

    displayValue() {
      console.log(`The value is: ${this.value}`);
    }
  }
}

// 2. Use namespaces
// To use code from a namespace, you can import the code using a fully qualified name or using a namespace import.

// we demonstrate two ways of using classes MyNamespace in the namespace MyClass.
// First, we use the fully qualified name MyNamespace.MyClass.
// Second, we import the class using a namespace import statement MyClass and use it with a shorter name.

// use fully qualified name
const instance1 = new MyNamespace.MyClass(5);
instance1.displayValue(); // Output: The value is: 5

//Import using namespace
import MyClass = MyNamespace.MyClass;
const instance2 = new MyClass(10);
instance2.displayValue(); // Output: The value is: 10

// 3. Nested namespaces
// Namespaces can be nested to create hierarchies and further organize code.
namespace OuterNamespace {
  export namespace InnerNamespace {
    export class MyClass {
      constructor(public value: number) {}

      displayValue() {
        console.log(`The value is: ${this.value}`);
      }
    }
  }
}
// use fully qualified name
const instance = new OuterNamespace.InnerNamespace.MyClass(15);
instance.displayValue(); // Output: The value is: 15
