// Clases

/*
Son plantillas para fabricar objetos

Modificadores de Acceso: Se usan para proteger la integridad de los datos

Podemos definir sus propiedades y metodos como publicos o privados
-Si no ponemos nada por default sera public
-Si lo queremos ocultar lo podemos poner como private

Las propiedades las podemos poner como constantes para que no se modifiquen con la palabra readonly
*/

class Movie {
    readonly title: string;
    private duration: number;
    hasOscars: boolean;

    constructor(title: string, duration: number, hasOscars: boolean) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
    }

    getInfo(){
        return `Titulo: ${this.title}, Duracion: ${this.duration}, Oscars: ${this.hasOscars}`;
    }
}

const movie1 = new Movie('El señor de los anillos', 300, true);
const movie2 = new Movie('Harry Potter', 120, true);
const movie3 = new Movie('Avatar', 130, true);

console.log(movie1, movie2, movie3);
console.log(movie1.getInfo());
// Nos sale un error si intentamos acceder a una propiedad privada
console.log(movie1.duration);

// Nos da error al intentar cambiar el valor de la propiedad al tener readonly y ser una constante
movie1.title = 'Hola';
console.log(movie1);


// Tambien podemos crear clases de forma mas sensilla con una sintaxis mas corta, creando las propiedades en el constructor,  poniendo modificadores de accedo

/*
class Movie {

    constructor(
        public title: string,
        private duration: number,
        readonly hasOscars: boolean) {}

    getInfo(){
        return `Titulo: ${this.title}, Duracion: ${this.duration}, Oscars: ${this.hasOscars}`;
    }
}
*/


/* Ejercicios */

const nombreEmpleado = document.getElementById('nombreEmpleado') as HTMLInputElement;
const registrar = document.getElementById('botonRegistrar') as HTMLButtonElement;
const mostrar = document.getElementById('pantallaEmpleado') as HTMLElement;

class Empleado {
    readonly id: number;
    public nombre: string;
    private sueldo: number;

    constructor(id: number, nombre: string, sueldo: number) {
        this.id = id;
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerFicha() {
        console.log(`Log interno: El sueldo de ${this.nombre} es ${this.sueldo}`);
        return `ID: ${this.id} - Empleado: ${this.nombre}`;
    }
}

const listaEmpleados: Empleado[] = [];

registrar.addEventListener('click', (e) =>{
    const id = Math.floor(Math.random() * 1001)
    const sueldo = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

    const nuevoEmpleado = new Empleado (id, nombreEmpleado.value, sueldo);

    listaEmpleados.push(nuevoEmpleado);

    mostrar.textContent = nuevoEmpleado.obtenerFicha()
})
