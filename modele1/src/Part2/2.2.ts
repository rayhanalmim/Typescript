{
    //Genetic
    type GeneticArr = Array<string>;

    const myData: GeneticArr = ['rayhann', "al", "mim"];

    console.log(myData);

    //make it reuseable
    type GeneticArr2<T> = Array<T>;
    const IdList : GeneticArr2<number> = [3, 4, 6]
    const IdList2 : GeneticArr2<string> = ["3", "4", "6"]

    //
}