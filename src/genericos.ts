// Genéricos
/*
    Es una forma de pasar datos (o tipos de variables) a una funcion, para que a la hs de trabajar con una funcion de igual el tipo de dato que recibe por parametro.

    los genéricos permiten que una función sea flexible. En lugar de crear una función para números y otra para textos, creás una sola que acepta cualquier tipo.

    En vez de algo se suele poner una T
*/


//---- Sintaxis en funciones comunes
/*
function getFirstElement(array: number[]){
    return array[0]:
}
*/
function getFirstElement<algo>(array: algo[]){
    return array[0];
}

const numArr: number[] = [10, 20, 30];
const firstNum = getFirstElement<number>(numArr);
console.log(firstNum);

const strArr: string[] = ['a', 'b', 'c'];
const firstStr = getFirstElement<string>(strArr);
console.log(firstStr);



//---- Sintaxis en funciones de flecha
/*
const primerElemento = (array: number[]) => {
    return array[0];
}
*/
const primerElemento = <algo>(array: algo[]) => {
    return array[0];
}

const arrNum: number[] = [10, 20, 30];
const primerNum = primerElemento(arrNum);
console.log(primerNum);

const letraArr: string[] = ['a', 'b', 'c'];
const firstArr = primerElemento(letraArr);
console.log(firstArr);


/*************************/

// Tambien los usamos con en el dom con querySelector (getElementById no lo permite)
// const h1 = document.querySelector<HTMLHeadingElement>('#UnaClase')


/*
Donde mas se usan:

- Peticiones a APIs (Fetch): Cuando traés datos de internet, no sabés qué viene. Usás un genérico para decirle: "Traé estos datos y dales el molde de 'Usuario' o 'Producto'".

- Promesas: Cuando algo tarda en cargar, la Promesa es genérica porque no sabe si va a devolver un texto, un número o un error.

- Componentes de React: Se usan para crear componentes que pueden recibir cualquier tipo de contenido y seguir siendo seguros.

- Colecciones de datos: Si creás una "Caja" o una "Lista" personalizada, usás un genérico para que esa caja sirva para guardar cualquier cosa (herramientas, ropa, archivos) sin perder el tipo de dato.
*/




/* Ejercicios */

const pantallaPeso = document.querySelector<HTMLDivElement>('#pantallaPeso');
const pantallaNota = document.querySelector<HTMLDivElement>('#pantallaNota');


const obtenerUltimoElemento = <T> (dato: T[]) => {
    return dato[dato.length - 1];
}

const historialPesos: number[] = [35, 96, 15, 42];

const historialNotas: string[] = ['Buen ritmo', 'Falta hidratación', 'Récord superado'];

const datoPeso = obtenerUltimoElemento(historialPesos);
const datoNota = obtenerUltimoElemento(historialNotas);

if (pantallaPeso && pantallaNota) {
    pantallaPeso.textContent = String(datoPeso);
    pantallaNota.textContent = datoNota
}