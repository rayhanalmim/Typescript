{
    //2nd part for typescript


    //Type assertion, type nrrowtion

    const checkType = (params: number | string | undefined): number | string | undefined => {
        if (typeof params === "number") {
            return params;
        }
        else if (typeof params === 'string') {
            return params.toString();
        }
        else {
            return params;
        }
    }
    const result = checkType(23) as number;
    const result2 = checkType('rayhan') as string;
    // console.log(result, result2);

    //interface 
    interface Student {
        name : string;
        id: number;
    }

    const obj : Student = {
        name : "rayhan",
        id: 333,
    }

    //
}