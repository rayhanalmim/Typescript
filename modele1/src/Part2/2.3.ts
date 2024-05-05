{
    // genetic with functions
    const precreateArrayWithGenetic = (params : string) : String[] =>{
        return [params];
    }
    const result = precreateArrayWithGenetic('rayhan');
    // const result2 = createArrayWithGenetic(44);  //give error for defferent type value
    console.log(result);

    // make it reuseable
    const createArrayWithGenetic = <T>(params : T) : T[] =>{
        return [params];
    }
    const resultRE = createArrayWithGenetic<string>('rayhan');
    const resultRE2 = createArrayWithGenetic<number>(444);

    // console.log(resultRE, resultRE2);

    type dataType = {
        name: string; id: number
    }
    const resultRE3 = createArrayWithGenetic<dataType>({name: "rayhan", id: 444});

    // genetic tuple with functions 

    const geneticTupleWithFun = <T, Q>(param1: T, params2 : Q) : [T, Q] =>{
        return [param1, params2];
    }
    const createTupleWithGenFun = geneticTupleWithFun<string, number>('rayhan', 222)
    console.log(createTupleWithGenFun);

    //
}