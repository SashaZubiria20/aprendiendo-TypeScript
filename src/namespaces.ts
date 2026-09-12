// Namespaces

/*
    Se usaba antes de los modulos para separar y organizar codigo, es decir, es agrupar código para que no se mezclaran los nombres de las variables
*/


namespace Common {
    export interface User {
        id: number;
        username: string;
    }

    export interface Error {
        id: number;
        isCritical: boolean;
        message: string;
    }
}


interface User {
    uuid: string;
    username: string;
}

const user: Common.User = {
    id: 1234,
    username: 'sasha'
}