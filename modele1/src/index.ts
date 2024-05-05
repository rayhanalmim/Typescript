let course : string = 'next level web development';
console.log(course);


//type alias 
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
//or
type AddType = (num1: number, num2: number) => number;
const Add : AddType = (num1 , num2) =>{
    return num1+num2;
}

//array destructuring
const arr1 : string[] = ['rayhan', "al", "mim"];
const [,,mylastname] = arr1;
const [a, ...c] = arr1;

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
//or
const allbros : string[] = [...bros1, ...bros2]

//learn rest operator
const mergeFriend = (...friends : string[]) =>{
    friends.forEach((friend: String) => console.log(`hello ${friend}`));
}

mergeFriend('rayhan', 'sadman', "alvi");


//destructuring 

const newData = {
    id: 2225,
    name: {
        firstName: 'rayhan',
        lastName: 'mim'
    }
};
const {id, name: {firstName: myName}} = newData;

//union mean or and we represent it in typescript using single | 
//intersection means logical and, also we represent it using single &

console.log(obj.name);