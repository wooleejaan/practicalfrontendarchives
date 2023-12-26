// Decorators in TypeScript are powerful features that allow you to add
// metadata and modify or extend the behavior of classes, methods, properties,
// and parameters. They are higher-order functions that can be used to
// observe, modify, or replace class definitions, method definitions, accessor
// definitions, property definitions, or parameter definitions.

// 1. class decorator
// Class decorators are applied to the constructor of a class and can be used to modify or extend the class definition.

// a class decorator named LogClass, which records the name of the decorated class when it is defined.
// We then apply the decorator to the MyClass class using the @ syntax.
function LogClass(target: Function) {
  console.log(`Class ${target.name} was defined.`);
}

@LogClass
class MyClass {
  constructor() {}
}

// 2. method decorator
// Method decorators are applied to methods of a class and can be used to modify or extend the method definition.

// LogMethod method decorator named which records the name of the decorated method when it is called.
// We then @apply the decorator to MyClass the class's myMethod method using syntax.
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method ${key} was called.`);
}

class MyClass {
  @LogMethod
  myMethod() {
    console.log("Inside myMethod.");
  }
}
const instance = new MyClass();
instance.myMethod();

// 3. Property decorator
// Property decorators are applied to properties of a class and can be used to modify or extend the property definition.

// a DefaultValue property decorator named which sets a default value for the decorated property.
//We then @apply the decorator to MyClass the class's myPropertyproperties using the syntax.
function DefaultValue(value: any) {
  return (target: any, key: string) => {
    target[key] = value;
  };
}

class MyClass {
  @DefaultValue(42)
  myProperty: number;
}
const instance = new MyClass();
console.log(instance.myProperty); // Output: 42

// 4. Parameter decorator
// Parameter decorators are applied to parameters of a method or constructor and can be used to modify or extend the parameter definition.

// a parameter decorator named LogParameter, which records the index and name of the decorated parameter when the method is called.
// We then @ apply the decorator to the value parameter of the myMethod method of the MyClass class using the syntax.
function LogParameter(target: any, key: string, parameterIndex: number) {
  console.log(
    `The parameter ${parameterIndex} of the method ${key} was called.`
  );
}

class MyClass {
  myMethod(@LogParameter value: number) {
    console.log(`Inside myMethod method, use value ${value}.`);
  }
}
const instance = new MyClass();
instance.myMethod(5);
