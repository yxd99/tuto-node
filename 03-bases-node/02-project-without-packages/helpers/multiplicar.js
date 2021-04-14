const fs = require('fs')

const createFile = async( base = 5 ) => {
    try{
        const directory = `./files/`
        const file = `table-${ base }.txt`
        const path = `${ directory + file }`
        let content = ``

        for(let i = 1; i <= 10; i++){
            content += `${ base } x ${ i } = ${ base * i }\n`
        }

        console.log(content)
        
        fs.writeFileSync(path, content)

        return `${ file } created.`
    }catch(error){
        throw `Error to created file ${ file }, ${ error }`
    }
}

module.exports = {
    createFile
}