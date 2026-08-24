// Funciones


const suma = (n1: number, n2: number): number => {
    return n1+n2;
}
console.log(suma(3,4));

const toUpper = (str: string) => str.toUpperCase()
console.log(toUpper('hola'));

const sayHellow = () => {
    console.log('Hellow')
}
sayHellow()


/******************Ejercicios********************/
type Producto = {
    nombre: string;
    categoria: 'celulares' | 'laptops' | 'accesorios';
    precio: number;
    estaDisponible: boolean;
}

const mostrarProducto = (producto: Producto): string => {
    return `Producto: ${producto.nombre}, Categoria: ${producto.categoria}, Precio: ${producto.precio}`;
}

const pantallaProductos = document.getElementById('pantallaProductos');


if (pantallaProductos){
    const nuevoProducto: Producto = {
        nombre: 'iPhone',
        categoria: 'celulares',
        precio: 1000,
        estaDisponible: true
    };
    pantallaProductos.innerHTML = mostrarProducto(nuevoProducto)
};