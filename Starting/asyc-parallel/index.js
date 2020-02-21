const {tareaUno, tareaDos} = require('./task');

async function inicio()
{
    console.time('Tiempo');
    //ejecutar en paralelo
    const resultados = await Promise.all([tareaUno(), tareaDos()]);
    //const valoruno = await tareaUno();
    //const valordos = await tareaDos();
    
    console.timeEnd('Tiempo');

    //console.log('Resultado uno ', valoruno);
    //console.log('Resultado dos ', valordos);

    console.log('Resultado uno ', resultados[0]);
    console.log('Resultado dos ', resultados[1]);
}

inicio();