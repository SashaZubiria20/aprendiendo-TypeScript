// Tipos de datos:

// JS
// let movie = 'El Señor de los Anillos'
// tS
let movie: string = 'El Señor de los Anillos'
console.log(movie)
// movie = 5

// Modificacion

movie = 'La Comunidad del Anillo'
console.log(movie)


// JS
// let duration = 200
// tS
let duration: number = 200
console.log(duration)
// duration = 'Hola'


// JS
// let hasOscar = true
// tS
let hasOscar: boolean = true
console.log(hasOscar)
// duration = 'Hola'


// Existe el tipo de dato object el cual especificamos que es un objeto pero no hace falta especificar cada valor dentro
let myObject: object = {
    product: 'computer',
    price: 123
}
console.log(myObject)


// JS
// let miArr = [10, 20, 30]
// TS
let miArr: number[] = [10, 20, 30]
// myArr ['sfaa', 'sfa']
console.log(miArr)


// any no existe en js, es de ts, nos permite no especificar el tipo de dato en una variable
let data: any = 999
console.log(data)
data = 'ahora es un string'
console.log(data)

