// DOM - Elementos

/*
Hay que castear los tipos de datos qeu queremos utilizar

En JS Vanilla, document.querySelector devuelve "algo". No le importa qué es.

En TypeScript, el lenguaje es muy precavido. Cuando seleccionás un elemento, TS piensa dos cosas:

- ¿Existe?: Puede que el ID esté mal escrito, entonces TS dice que el tipo es Element | null.
- ¿Qué es?: Un Element genérico no tiene las mismas propiedades que un Input. Un p tiene textContent, pero no tiene value. Un input tiene value, pero no tiene href.

El Casteo (Aserción de Tipo):
Es cuando vos le decís a TS: "Yo soy el programador y te aseguro que este ID pertenece a un Input". Se usa la palabra clave as
*/

const h1 = document.querySelector('h1');
console.log(h1?.textContent);

const titleDOM = document.querySelector('.dom') as HTMLHRElement;
console.log(titleDOM.textContent);

const username = document.querySelector('#nombreUsuario') as HTMLInputElement;
console.log(username.placeholder)



/* Ejercicios */

const precio = document.getElementById('precioProducto') as HTMLInputElement;
const descuento = document.getElementById('porcentajeDescuento')as HTMLInputElement;
const calcular = document.getElementById('botonCalcular') as HTMLButtonElement;
const result = document.getElementById('pantallaResultado') as HTMLElement;


const calcularDescuento = (p: number, d: number): string => {
    const total = p-(p*(d/100))
    return `El precio final es de $${total}`
}

calcular.addEventListener('click', () => {
    if(precio && descuento && result) {
        const p = Number(precio.value);
        const d = Number(descuento.value);
        const precioFinal = calcularDescuento(p,d);
        result.textContent = precioFinal;
    };
});