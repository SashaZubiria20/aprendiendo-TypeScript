// Interfaces

/*
    Es otra manera de definir tipos de datos en TS, se usa parecido a una clase pero se especifica las propiedades

    Se usa mas que nada trabajando con objetos


    Imaginá que un type es un apodo (un alias). Le das un nombre a una estructura y listo.

    En cambio, una Interface es un CONTRATO.

- Si vos decís que un objeto es de tipo interface Director, le estás firmando un contrato a TypeScript donde prometés que ese objeto sí o sí va a tener esas propiedades.

- La gran diferencia: Las interfaces son "abiertas". Podés crear una interface Auto en un archivo y luego en otro archivo volver a escribir interface Auto agregándole más cosas, y TypeScript las une. Los type no permiten eso.

- En la vida real: Se usan interfaces casi siempre que trabajamos con objetos o cuando traemos datos de una API.
*/

interface Director<T> {
    name: string;
    age: number;
    data: T;
}

const director1: Director<string> = {
    name: 'Juan',
    age: 60,
    data: 'Él es el mejor'
}

console.log(director1)




/* Ejercicios */

const tituloLibro = document.getElementById('tituloLibro') as HTMLInputElement;
const botonGuardarLibro = document.getElementById('botonGuardarLibro') as HTMLButtonElement;
const nombreAutor = document.getElementById('nombreAutor') as HTMLInputElement;
const pantallaBiblioteca = document.getElementById('pantallaBiblioteca') as HTMLDivElement;

interface Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;
}

const miLibro: Libro = {
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling',
    añoPublicacion: 1997
}

botonGuardarLibro.addEventListener('click', () =>{
    const libroNuevo = tituloLibro.value
    const autorNuevo = nombreAutor.value
    miLibro.titulo = libroNuevo
    miLibro.autor = autorNuevo
    pantallaBiblioteca.textContent = `Libro: ${miLibro.titulo} - Autor: ${miLibro.autor}`
})