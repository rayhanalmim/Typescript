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
    
    //
}