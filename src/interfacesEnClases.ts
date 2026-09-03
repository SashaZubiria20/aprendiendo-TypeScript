// Interfaces y clases

/*
    La Interface es un contrato de cumplimiento obligatorio: Al implementar una interfaz en una clase, estamos obligando a implementar lo que definimos en la interface, no solamente con propiedades, tambien podemos definir que una clase este obligada a implementar un metodo

    Por convencion si la interface se va a usar en una clase, suelen empezar con I

    Para emplimentar una interface se usa la palabra implements

    Si trabajamos con interfaces las propiedades y metodos deben ser publicos, o podemos crear un geter,

    podemos implementar tantas interfaces como queramos en una clase, separadas por ,
*/


interface Animale <T> {
    name: string;
    habitat: string;
    feature: T;
}

const leon: Animale<string> = {
    name: 'Leon',
    habitat: 'Terrestres',
    feature: 'El rey de la selva'
}

console.log(leon)



// Interfaces
interface IDomestico {
    name: string;
    domestico: boolean;
    comer(): void;
}


class Animal implements IDomestico {
    name: string;
    feeding: string;
    skeleton: string;
    domestico: boolean;

    constructor(name: string, feeding: string, skeleton: string, domestico: boolean){
        this.name = name;
        this.feeding = feeding;
        this.skeleton = skeleton;
        this.domestico = domestico;
    }

    info(){
        return `El ${this.name} es un amimal ${this.feeding} y ${this.skeleton}`;
    }

    comer(){
        console.log(`El ${this.name} ya se alimento`);
    }
}

const cat = new Animal('Gato', 'Carnivoro', 'Vertebrado', true);
console.log(cat);
console.log(cat.info());



/* Ejercicios */

const modelo = document.getElementById('modeloVehiculo') as HTMLInputElement;
const btnAuto = document.getElementById('botonCargarVehiculo') as HTMLButtonElement;
const pantallaVehiculo = document.getElementById('pantallaVehiculo') as HTMLDivElement;

interface IVehiculo {
    modelo: string;
    bateria: number;
    encender(): string;
}

class AutoElectrico implements IVehiculo {
    id: number;
    modelo: string;
    bateria: number;
    autonomiaKms: number;

    constructor (id:number,  modelo:string, bateria:number, autonomiaKms: number){
        this.id = id;
        this.modelo = modelo;
        this.bateria = bateria;
        this.autonomiaKms = autonomiaKms;
    }

    encender() {
        return `Número de stock: ${this.id} | Auto: ${this.modelo} | Porcentaje de bateria: ${this.bateria} | Autonomia: ${this.autonomiaKms} km`
    }
}


btnAuto.addEventListener('click', ()=>{
    const stockAleatorio: number = Math.floor(Math.random() * 1001);
    const bateriaAleatoria: number = Math.floor(Math.random() * 101);
    const autonomiaAleatoria: number = Math.floor(Math.random() * 801);

    const auto1 = new AutoElectrico(stockAleatorio, modelo.value, bateriaAleatoria, autonomiaAleatoria)

    pantallaVehiculo.textContent = auto1.encender();
})