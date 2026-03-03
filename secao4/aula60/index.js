const recursiva = (max, atual) =>{

    if( atual > max) return;
    console.log(atual++);

    recursiva(max, atual)

}

recursiva(10,0)