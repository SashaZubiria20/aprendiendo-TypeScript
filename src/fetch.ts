// Fetch

/*
Se usa para hacer una peticion a una API

https://jsonplaceholder.typicode.com/

Como es ts, lo ideal es castear el tiipo de dato, a alguno que conozcamos, lo podemos crear

* Recordar que es mejor crear las interfaces en un archivo aparte
*/

interface Usuario {
    name: string;
}

const traerUsuario = async (): Promise <Usuario> => {
    const api = 'https://jsonplaceholder.typicode.com/users/1';
    const response = await fetch(api);
    const datos = await response.json();
    return datos;
};

const btnFetch = document.getElementById('botonLogin') as HTMLButtonElement;

const pFetch = document.getElementById('nombreUsuario') as HTMLParagraphElement;

btnFetch.addEventListener('click', async () => {
    const usuario = await traerUsuario();
    pFetch.textContent = usuario.name;
});