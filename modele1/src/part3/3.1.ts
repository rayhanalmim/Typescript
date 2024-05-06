{
    // OOP
    class Person {
        name : string;
        id: number;

        constructor(name: string, id: number){
            this.name = name;
            this.id = id;
        }

        public printId(){
            console.log(`the id of current student is ${this.id}`);
        }
    }

    const person1 = new Person('rayhan', 222015010)
    const person2 = new Person('sadman', 222015011)

    person1.printId();
    //
}