const multiplyValue = (a: number, b?: number):number => {
    if (b === undefined) return a * 2;

    return a * b;
}

// console.log(multiplyValue(10,0));

const processInput = (value: string | number | boolean): string | number | boolean => {
    if(typeof value === "string"){
        return value.trim().toLocaleLowerCase();
    }
    if(typeof value === "number") return value * 10;

    if(typeof value === "boolean"){
         return value ? "Active" : "Inactive";
    }
    return value;
}

// console.log(processInput(false));

const formatCoordinate = (coordinate: readonly [number, number, string]):string => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}

// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

const concatenateArrays = <A>(...arr: A[][]):A[] =>{
   return arr.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [6, 4], [5]));

interface Course {
    title:string,
    students:number,
    isPublished:boolean,
}

const getPopularCourses = (course:Course[],minstudents:number): Course[] => {
    return course.filter((c) => {
        return c.isPublished === true && c.students >= minstudents;
    });
}

const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];



// console.log(getPopularCourses(courses, 80));

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] =>{
    return items.map((i) => i[key]);
}

interface Users{
    id: number,
    name: string,
    role: string
}

const users: Users[] = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));

class Employee {

    constructor(
        protected name: string,
        private baseSalary: number

    ) {}

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{

    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ){
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}


const emp = new Employee("Alice",50000);
const man = new Manager("Alice",50000,"Engineering");

// console.log(emp.getDetails());
// console.log(man.getRoleInfo());

const validateAgeAsync = async (age: number): Promise<string> => {
    if(age < 18){
        throw new Error("Error: Access Denied: Must be 18 or older");
    }

    await new Promise((res) => setTimeout(res,1000));

    return "Access Granted";

}

const age = async () => {
    try {
        const result = await validateAgeAsync(17);
        return result;
    } catch (error) {
        return (error as Error).message;
    }
};

// age().then(console.log)