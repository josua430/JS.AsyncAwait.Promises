//utilidades del lenguaje, para usar settimeout
const util = require('util');
//para ejecutar una funcion con callback como async/await
const sleep = util.promisify(setTimeout);

module.exports = {
    async tareaUno(){
        try {
            throw new Error('Error ocurrió');
            await sleep(4000);
            return "Tarea uno";
                
        } catch (e) {
            console.log(e);
        }
    },
    async tareaDos(){
        try{
            await sleep(2000);
            return "Tarea dos";    
        }catch(e)
        {
            console.log(e);
        }
    }
}