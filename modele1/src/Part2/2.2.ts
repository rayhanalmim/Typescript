{
    //Genetic
    type GeneticArr = Array<string>;

    const myData: GeneticArr = ['rayhann', "al", "mim"];

    console.log(myData);

    //make it reuseable
    type GeneticArr2<T> = Array<T>;
    const IdList : GeneticArr2<number> = [3, 4, 6]
    const IdList2 : GeneticArr2<string> = ["3", "4", "6"]

    // genetic tuple
    type Student<T, S> = [T, S];
    const student : Student<string, number> = ['rayhan', 222015010];
    const student2 : Student<number, {name: string, id: number}> = [222, {name : "rayhan", id: 222}];

    //genetic interface with obj

    type Students <T> {
        name : string;
        info: T
    }
    const studentData : Students<{admissionYear: number, totalCost: string}> = {
        name : 'rayhan',
        info : {
            admissionYear: 2022,
            totalCost: "2.4l"
        }
    }
    //
}