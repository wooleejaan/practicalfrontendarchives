interface Person {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;
type NameAndAge = Pick<Person, "name" | "age">;
type WithoutEmail = Omit<Person, "email">;
