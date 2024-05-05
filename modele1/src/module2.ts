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
    console.log(result);

    //
}