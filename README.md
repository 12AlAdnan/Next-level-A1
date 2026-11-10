**TS Assignment**

This repository contains solutions to practical programming problems written in TypeScript. The code demonstrates key TypeScript concepts, including optional parameters, union types, tuples, generics, interface filtering, keyof constraints, object-oriented programming (OOP), and asynchronous operations with error handling.

**Features & Problem Breakdown**

1. Multiply Value (`multiplyValue`)

Concept: Optional Parameters & Default Behavior

Description: Takes a mandatory number` a` and an optional number `b`. If `b` is provided, it returns `a * b`. If b is omitted (`undefined`), it doubles `a`.

2. Process Input (`processInput`)

Concept: Union Types & Type Narrowing (`typeof`)

Description: Handles input of type `string | number | boolean:`.I use `value.trim()` to trims the whitespace and `.toLocaleLowerCase()` to converts it lowercase

Number: Multiplies by 10.

Boolean: Returns "Active" for true and "Inactive" for false.

3. Format Coordinate (`formatCoordinate`)

Concept: Readonly Tuples

Description: Accepts an immutable tuple `[number, number, string]`representing `[latitude, longitude, locationName]`and formats it into a human-readable location string.

4. Concatenate Arrays (`concatenateArrays`)

Concept: Generics & Rest Parameters

Description: A generic function <A> that accepts any number of arrays of type A[] and flattens them into a single array using arr.flat().

5. Filter Popular Courses (`getPopularCourses`)

Concept: Interface & Array Filtering

Description: Defines a Course interface and filters an array of courses to return only those that are published (`isPublished === true`) and meet a minimum student threshold (`students >= minstudents`).

6. Pluck Values (`pluckValues`)

Concept: Generic Constraints using keyof

Description: Accepts an array of objects of type T and a key K (`constrained to keyof T`), returning an array containing the values corresponding to that key across all items.

7. Employee & Manager Classes (`Employee, Manager`)

Concept: Object-Oriented Programming `(OOP)`, Access Modifiers `(protected, private)`, and `Inheritance`

Description: Employee encapsulates name and baseSalary with a method getDetails().
Manager inherits from Employee, adds a department property, and provides a custom getRoleInfo() method.

8. Async Age Validation (`validateAgeAsync & age`)

Concept: `Async/Await`, `Promises`, and `Error` Handling

Description: Simulates an asynchronous age verification process. Throws an error if age is under 18, or resolves with `"Access Granted"` after a 1-second delay. Includes a wrapper function demonstrating `try/catch` error handling.

## Blog Post link

1. [Type Aliases vs Interfaces] (./type_aliases_vs_interfaces.md)
2. [Generics and Promises] (./generics_and_promises.md)