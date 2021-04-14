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
        return reject(`El salario del empleado con id ${id} no está registrado.`)
    })
}

const getInfoUsuario = async ( id ) => {
    try{
        const empleado = await getEmpleado( id )
        const salario = await getSalario( id )

        return `El salario del empleado ${empleado} es de ${salario}`
    }catch(error){
        throw error
    }
}

const id = 3

getInfoUsuario(id)
    .then( value => console.log(value))
    .catch( error => console.log(error))