{
    // genetic constraint with keyoff operator

    type Datatype = {
        name: string;
        id: number;
        isActive: boolean
    }

    type owner = "name" | "id" | "isActive";
    // or
    type owner2 = keyof Datatype;

    const student1 : owner = "name";
    const student2 : owner2 = "name";
    // 
}