const empleados = [
    {
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Linda"
    },
    {
        id: 3,
        nombre: "Karen"
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre

    if(empleado){
        callback(null, empleado)
    }else{
        callback(`El empleado con el id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario

    if(salario){
        callback(null, salario)
    }else{
        callback(`El salario del id ${id} no esta registrado.`)
    }
}

const id = 3

getEmpleado(id, (error, value) => {
    if(error) return console.log(`Error: ${error}`)

    console.log(`Nombre del empleado: ${value}`)
    
    getSalario(id, (error, value) => {
        if(error) return console.log(`Error: ${error}`)
        return console.log(`Salario del empleado: `,value)
    })
})