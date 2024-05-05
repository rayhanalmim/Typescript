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
    const resultRE = createArrayWithGenetic(<string>'rayhan');
    const resultRE2 = createArrayWithGenetic(<number>444);
    const resultRE3 = createArrayWithGenetic(<{name: string, id: number}>{name: "rayhan", id: 444});

    //
}