// Tipos de datos Avanzados:


// Uniones:

// Union: Podemos combinar dos tipos de datos
let id: number | string = 1234;
id = 'Hola'
console.log(id)


// Podemos crear nuestro propio tipo de dato
type miDato = number | string
let userID: miDato = 123
console.log(userID)


// Podemos crear tipos de datos para objetos
type movie = {
    title: string;
    duration: number;
    hasOscars: boolean;
}

const terminator: movie = {
    title: 'Termineitor',
    duration: 200,
    hasOscars: true
}
console.log(terminator)


// Podemos crear arrays del tipo que queramos
let arr: (number | string | boolean)[] = [10, 20, 30];
arr = [70, 40, 'str1', 'str2']
console.log(arr)


// Tipos de datos Literales
// Definimos solo un estado posible
type stateLoading = 'loading'
type stateError = 'error'

let loading: stateLoading = 'loading'
console.log(loading)
let error: stateError = 'error'
console.log(error)

type state = stateLoading | stateError
let a: state = 'loading'
console.log(a)


// Tipo de dato de interseccion
// Es cuando usamos las caracteristicas de 2 o mas tipos de datos
type book = {
    title: string;
    pages: number;
}

// Combinamos el tipo de datos movie con book
type adaptacion = movie & book;
let harryPotter: adaptacion = {
    title: 'Harry Potter',
    duration: 120,
    hasOscars: true,
    pages: 400
}
console.log(harryPotter)