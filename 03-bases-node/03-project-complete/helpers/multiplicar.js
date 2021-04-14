const fs = require('fs');

const crearArchivo = async( base = 5, listar = false) => {

    try{
        const dir = './files/';
        const file = `table-${ base }.txt`;
        const path = `${ dir + file}`;

        let content = ``;

        for(let i = 1; i <= 10; i++){
            content += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if(listar){
            console.log(content)
        }

        fs.writeFileSync(path, content);

        return `Se ha creado el archivo ${ file }`;
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}