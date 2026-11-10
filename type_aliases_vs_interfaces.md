# Type Aliases vs Interfaces in TS: 

## Introduction

TypeScript is a strongly typed programming language built on top of JavaScript. It helps developers write more reliable and maintainable code by providing a static type system. Two important features of TypeScript are `type` aliases and `interface`.Both allow developers to define the structure of data, but they have some important differences.

Understanding when to use `type` and when to use `interface` helps developers create cleaner, more scalable applications.

## 1. What is a Type Alias

A type alias allows us to create a custom name for any type in TypeScript. We use the `type` keyword to define it.

**Example:**

```ts
type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "Al Amin",
    email: "miahadnan79@gmail.com"
};
```

Here, `User` represents an object containing three properties: `id`, `name`, and `email`. Instead of writing the complete object structure repeatedly, we can reuse the `User` type.

Type aliases can also represent primitive types, unions, intersections, tuples, and function types.

**Example of a Union Type:**

```ts
type Status = "pending" | "success" | "failed";

let currentStatus: Status = "success";
```

This means `currentStatus` can only contain one of the three specified values.

## 2. What is an Interface?

An interface defines the structure or shape of an object. It describes which properties and methods an object should contain.

We use the `interface` keyword to create an interface.

**Example:**

```ts
interface Employee {
    id: number;
    name: string;
    salary: number;
}

const employee: Employee = {
    id: 101,
    name: "Rahim",
    salary: 50000
};
```

In this example, the `Employee` interface defines the required properties of an employee object.

Interfaces are particularly useful when designing object-oriented applications and defining contracts between different parts of an application.

## 3. Core Differences Between Type and Interface

Although both can describe object structures, they differ in several ways.

### A. Declaration Merging

One major difference is that interfaces support declaration merging, while type aliases do not.

**Interface example:**

```ts
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "Rahim",
    age: 25
};
```

TypeScript automatically combines both declarations into one interface.

### B. Union and Intersection Types

Type aliases support union and intersection types directly.

**Union example:**

```ts
type ID = number | string;

let userId: ID = 101;
userId = "USER101";
```

Here, the variable can hold either a number or a string.

**Intersection example:**

```ts
type BasicInfo = {
    name: string;
};

type ContactInfo = {
    email: string;
};

type User = BasicInfo & ContactInfo;

const user: User = {
    name: "Rahim",
    email: "rahim@example.com"
};
```

The intersection combines the properties of both types.

Interfaces can also extend multiple interfaces to achieve a similar result for object structures.

### C. Extending and Reusing Structures

Both interfaces and type aliases support inheritance-like composition.

**Using interface:**

```ts
interface Employee {
    name: string;
}

interface Manager extends Employee {
    team: string;
}
```

**Using type:**

```ts
type Employee = {
    name: string;
};

type Manager = Employee & {
    team: string;
};
```

Both approaches allow us to reuse existing structures.

### D. Primitive and Complex Types

An interface is primarily designed to describe object-like structures.

A type alias can represent almost any TypeScript type, including:

- Primitive types
- Union types
- Intersection types
- Tuple types
- Function types
- Object types

For example:

```ts
type Coordinates = [number, number];

type Calculation = (a: number, b: number) => number;

type Username = string;
```

These examples demonstrate the flexibility of type aliases.

# Conclusion

Both type aliases and interface are essential features of TypeScript. They help developers define reusable and reliable data structures.

Interfaces are generally a natural choice for object contracts and extensible object-oriented designs. Type aliases are more flexible when working with unions, intersections, tuples, and other complex types.

Understanding their differences allows developers to choose the right approach and write more organized, maintainable, and scalable TypeScript applications.