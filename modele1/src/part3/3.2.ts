{
    //learn abstractions

    interface StudentInterface{
        pay() : void;
        getBill(): void;
        printInfo() : void;
    };


    class Student implements StudentInterface{
        name : string;
        id: number;
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
        printInfo(): void {
            console.log(`The student '${this.name}' ID: '${this.id}' Current due amount is : ${this.dueAmount}}`);
        }
    }
    

    //
}