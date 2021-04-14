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

const getEmpleado = ( id ) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre
        
        if(empleado){
            return resolve(empleado)
        }
        return reject(`El empleado con id ${id} no existe.`)
    })
}

const getSalario = ( id ) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario

        if(salario){
            return resolve(salario)
        }
        return reject(`El empleado con id ${id} no tiene registrado un salario.`)
    })
}

const id = 3

let nombre

getEmpleado(id)
    .then( empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log(`El salario del empleado ${nombre} es de ${salario}`))
    .catch( err => console.log(err) )