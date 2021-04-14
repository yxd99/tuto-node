const fs = require('fs')

console.clear()

const base = 12
const dir = `./files/`
const file = `table-${ base }.txt`
const path = `${ dir }${ file }`

let content = `=====================\n`
content += `TABLE OF ${ base }\n`
content += `=====================\n`

for(let i = 1; i <= 10; i++){
    content += `${ base } x ${ i } = ${ base * i }\n`
}

console.log(content)

fs.writeFile(path, content, (error) => {
    if(error){
        return console.log(error)
    }
    return console.log(`${ file } created.`)
})