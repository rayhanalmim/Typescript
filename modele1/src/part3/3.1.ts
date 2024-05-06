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

        public ModifyId(){
            return this.id = this.id + 2222;
        }

        get personId(){
            return this.id;
        }

        set updateIdUsingSet(value: number) {
            this.id = value;
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

     person1.updateIdUsingSet = 22211111;
     const data = person1.personId;
     console.log(data);
    //  console.log(person1.role);
    //  const newData = person1.ModifyId();
    //  console.log(newData);

    // const person1 = new Person('rayhan', 222015010)
    // const person2 = new Person('sadman', 222015011)
    // person1.printId();
    //
}