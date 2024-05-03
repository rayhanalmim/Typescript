let course : string = 'next level web development';
console.log(course);

type Datatype = {
    name : string;
    age: number;
    id: string;
}

const obj : Datatype = {
    name : "rayhan",
    age: 25,
    id: "222"
}

const add = (num1: number, num2: number): number =>{
    return num1+num2;
}

const arr1 : string[] = ['rayhan', "al", "mim"];

// tuple

const studentData : [string, number] = ['rayhan', 25]

console.log(obj.name);