const multiplyValue = (a: number, b?: number):number => {
    if (b === undefined) return a * 2;

    return a * b;
}


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


const formatCoordinate = (coordinate: readonly [number, number, string]):string => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}


const concatenateArrays = <A>(...arr: A[][]):A[] =>{
   return arr.flat();
}


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
