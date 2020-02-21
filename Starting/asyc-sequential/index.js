const {tareaUno, tareaDos} = require('./task');

async function inicio()
{
    console.time('Tiempo');

    const valoruno = await tareaUno();
    const valordos = await tareaDos();
    
    console.timeEnd('Tiempo');


    console.log('Resultado uno ', valoruno);
    console.log('Resultado dos ', valordos);
}

inicio();