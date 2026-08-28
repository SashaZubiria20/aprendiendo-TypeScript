// Herencia de Clases

/*
    Sirve para reutilizar las propiedades y metodos de una clase padre antes de crear una nueva
*/


class Car{
    readonly brand: string;
    public model: string;
    private price: number;

    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    carSheet() {
        return `Auto: ${this.brand} ${this.model} Valor: ${this.price}`;
    }
}

const car1 = new Car ('Fiat', 'Palio', 2000000)
console.log(car1)
console.log(car1.carSheet());


/* Para decirle a una clase que herede de otra, usamos la palabra reservada extends

Y dentro del constructor la palabra reservada super (hace referencia al contructor de la clase padre)

En otros lenguajes una Clase puede heredar de varias clases, pero en JS solo permite de una sola
*/

class PremiumCar extends Car{
    public highEnd: boolean;

    constructor (
        brand: string, model: string, price: number, highEnd: boolean,){
            super(brand, model, price)
            this.highEnd = highEnd;
        }

    carSheetPremium(){
        return `Auto de alta gama`
    }
}

const premiumCar1 = new PremiumCar('Porsche', '911', 10000000, true);
console.log(premiumCar1)
console.log(`${premiumCar1.carSheetPremium()} y su detalle es: ${premiumCar1.carSheet()}`);




/* Ejercicios */

const nombre = document.getElementById('nombreModelo') as HTMLInputElement;
const carga = document.getElementById('botonCargar') as HTMLButtonElement;
const pantallaDispositivo = document.getElementById('pantallaDispositivo') as HTMLDivElement;

class Dispositivo {
    marca: string;
    consumoWatts: number;

    constructor(marca: string, consumoWatts: number){
        this.marca = marca;
        this.consumoWatts = consumoWatts;
    }

    encender() {
        return `El dispositivo ${this.marca} está encendido`
    }
}

class Smartphone extends Dispositivo{
    sistemaOperativo: string;

    constructor(marca: string, consumoWatts: number, sistemaOperativo: string){
        super(marca, consumoWatts)
        this.sistemaOperativo = sistemaOperativo;
    }
    tomarFoto(){
        return `Capturando foto en ${this.sistemaOperativo}`;
    }
}

carga.addEventListener('click', () =>{
    const cel = new Smartphone('Samsung', 5, nombre.value)

    pantallaDispositivo.textContent = `${cel.encender()} ${cel.tomarFoto()}`;
})