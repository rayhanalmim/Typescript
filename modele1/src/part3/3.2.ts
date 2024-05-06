{
    //learn abstractions

    interface StudentInterface{
        pay() : void;
        getBill(): void;
        printInfo() : void;
    };


    class Student implements StudentInterface{
        name : string;
        private id: number;
        dueAmount: number;

        constructor(name: string, id: number, due: number){
            this.name = name;
            this.id = id;
            this.dueAmount = due;
        }



        pay(): void{

        }
        getBill(): void {
            
        }
        printInfo() {
            console.log(`The student '${this.name}' ID: '${this.id}' Current due amount is : ${this.dueAmount}}`);
        }
    }

    const person1 = new Student('Rayhan', 222, 5100);
    person1.printInfo();
    //
}