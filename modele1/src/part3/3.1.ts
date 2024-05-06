{
    // OOP
    class Person {
        private name : string;
        private id: number;

        constructor(name: string, id: number){
            this.name = name;
            this.id = id;
            this.printId();
        }

        public printId(){
            console.log(`the id of current student is ${this.id}`);
        }
    }

    class Teacher extends Person {
        role : string;
        selary: number;
        constructor(name: string, id: number, role: string ,selary: number){
            super(name, id);
            this.role = role;
            this.selary = selary;
        }
    }

     const person1 = new Teacher('rayhan', 222015010, 'teacher', 2999);

     console.log(person1.role);

    // const person1 = new Person('rayhan', 222015010)
    // const person2 = new Person('sadman', 222015011)
    // person1.printId();
    //
}