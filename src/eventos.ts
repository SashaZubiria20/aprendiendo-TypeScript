// HTML, Eventos & Reactividad

/*

*/

class Pelicula {
    public titulo: string;
    public duracion: number;
    public tieneOscar: boolean;

    constructor(titulo: string, duracion: number, tieneOscar: boolean) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.tieneOscar = tieneOscar;
    }

    obtenerInfo(): string {
        return `Título: ${this.titulo} - Duración: ${this.duracion} min - ¿Tiene Oscar?: ${this.tieneOscar ? 'Sí' : 'No'}`;
    }
}


const botonMostrar = document.getElementById('btnEvent') as HTMLButtonElement;
const listaPeliculas = document.querySelector('.movieList') as HTMLUListElement;


const peliculaUno = new Pelicula('El Señor de los Anillos', 300, true);
const peliculaDos = new Pelicula('Harry Potter', 120, true);

const peliArr: Pelicula[] = [peliculaUno, peliculaDos]

const agregarPeli = (pelicula: Pelicula) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');

    h3.textContent = pelicula.titulo;
    h4.textContent = `Duración: ${pelicula.duracion} min`;
    li.className = 'tarjetaPelicula';

    li.appendChild(h3);
    li.appendChild(h4);

    listaPeliculas.appendChild(li);
};


botonMostrar.addEventListener('click', () => {
    listaPeliculas.innerHTML = '';

    peliArr.forEach((peli) => {
        agregarPeli(peli);
    });
});


/* Ejercicios */

const comentario = document.getElementById('inputComentario') as HTMLInputElement;
const contador = document.getElementById('pantallaContador') as HTMLElement;

comentario.addEventListener('input', () => {
    const limite: number = 50;
    comentario.maxLength = 50;
    const cantidad: number = comentario.value.length;
    const disponible: number = limite-cantidad;

    contador.textContent = `Caracteres restantes ${disponible}`;
})