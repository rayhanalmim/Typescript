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

//object with functions --> method

const gubAccounts : {
    accountName: string;
    blance : number;
    addBlance: any;
} = {
    accountName: 'rayhan',
    blance: 0,
    addBlance(amount: number): number{
        return this.blance+amount;
    }
}

// learn sperad operator

const bros1 : string[] = ['rayhan', 'al', "mim"];
const bros2 : string[] = ['sadman', 'alvi'];

bros1.push(...bros2);


console.log(obj.name);