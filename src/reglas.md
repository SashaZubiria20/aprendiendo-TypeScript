
# MIS REGLAS DE APRENDIZAJE

## Tipado Implícito (Inferencia de tipos)
- Es cuando NO le decís a TypeScript qué tipo de dato es la variable, pero él lo deduce (lo adivina) automáticamente según el valor que le asignás al principio.
    Ej: let puntaje = 100; // TS deduce que es tipo 'number'

## Tipado Explícito
- Es cuando vos le decís exactamente a TypeScript qué tipo de dato va a guardar la variable usando los dos puntos (:).
    Ej: let nombreAventurero: string = "Sasha";

## Colores en VS Code
- **Rojo**: Error fatal. El código está "roto" y TypeScript no te dejará avanzar porque algo no tiene sentido (ejemplo: intentar sumarle un texto a un número).
- **Amarillo**: Limpieza/Advertencia. Es una Advertencia o un aviso de limpieza, por ejemplo, creaste una variable pero no la estas usando.


## Tipos de Datos Avanzados
- **Alias de Tipos (`type`)**
- Es como crear un "molde" o una etiqueta personalizada para reutilizarla. Evita repetir código.
    Ej: `type miID = number | string;`

- **Uniones (`|`)**
- Permite que una variable acepte más de un tipo de dato (funciona como un "O").
    Ej: `let respuesta: string | boolean = "Éxito";`

- **Intersecciones (`&`)**
- Sirve para combinar dos o más tipos (moldes) en uno solo (funciona como un "Y").
    Ej: `type productoFinal = productoBasico & detallesExtra;`

- **Tipos Literales**
- La variable no solo tiene un tipo, sino que solo puede valer una de las opciones exactas que definamos.
    Ej: `type estadosDeMision = "en-curso" | "terminada";`


## Funciones en TypeScript:
- **Parámetros Tipados**: Obligamos a que cada entrada de la función tenga un tipo.
    Ej: `function saludar(nombre: string) { ... }`
- **Tipo de Retorno**: Especificamos qué dato devuelve la función después de los paréntesis.
    Ej: `function sumar(n: number): number { return n + n; }`
- **Tipo Void**: Se usa cuando una función NO devuelve nada (solo ejecuta una acción, como un log o un cambio en el HTML).
    Ej: `function mostrarAlerta(): void { alert("Hola"); }`


## Manipulación del DOM en TypeScript:
- **Selección de Elementos**: Podemos usar `getElementById` o `querySelector`. TS por defecto los marca como `Element | null`.

- **Aserción de Tipo (Casteo)**: Se usa para decirle a TS exactamente qué tipo de etiqueta estamos capturando para poder acceder a sus propiedades específicas (como `.value`).
    Ej: `const entrada = document.getElementById('id') as HTMLInputElement;`

- **Tipos de Elementos Comunes**:
    - `HTMLInputElement`: Para inputs de texto, números, etc.
    - `HTMLButtonElement`: Para botones.
    - `HTMLParagraphElement`: Para etiquetas `<p>`.
    - `HTMLElement`: El tipo genérico si solo vas a usar cosas básicas como `.innerHTML`.
    
- **Operador de No Nulo (!)**: Se pone al final de la selección si estás 100% seguro de que el elemento existe y no querés usar un `if`.
    Ej: `document.getElementById('id')!;`

    
## Genéricos en TypeScript

- **Concepto**: Son "plantillas" que permiten que una función, interfaz o clase sea flexible y trabaje con distintos tipos de datos sin perder la seguridad de TS.
- **Sintaxis**: Se usa la letra `<T>` (por convención de "Type") o cualquier nombre descriptivo entre llaves angulares antes de los parámetros.
    Ej: `function identidad<T>(dato: T): T { return dato; }`
- **Uso en el DOM**: Permite especificar qué tipo de elemento estamos capturando con `querySelector` de forma nativa.
    Ej: `const titulo = document.querySelector<HTMLHeadingElement>('.clase');`
- **Ventaja**: A diferencia de `any`, los genéricos "recuerdan" el tipo de dato. Si le pasas un número, TS sabe que lo que sale es un número.


## Clases en TypeScript

- **Concepto**: Son moldes o plantillas para crear objetos que agrupan datos (propiedades) y acciones (métodos).
- **Modificadores de Acceso**:
    - `public`: Accesible desde cualquier lugar (es el valor por defecto).
    - `private`: Solo accesible dentro de la propia clase. Protege los datos.
    - `readonly`: Permite leer el valor pero impide que sea modificado después de la creación.
- **Constructor**: Es la función que se ejecuta automáticamente al crear un nuevo objeto (`new MiClase()`).
- **Sintaxis Corta**: Podemos declarar y asignar propiedades directamente en los parámetros del constructor ahorrando código.
    Ej: `constructor(public nombre: string) {}`


## Herencia en TypeScript

- **Concepto**: Permite que una clase (hija) herede todas las propiedades y métodos de otra clase (padre).
- **Palabra clave `extends`**: Se usa para indicar que una clase deriva de otra.
    Ej: `class Perro extends Animal { ... }`
- **Palabra clave `super`**: Es una función que llama al constructor de la clase padre. Es obligatoria si la clase hija tiene su propio constructor.
    Ej: `super(propiedadPadre);`
- **Sobreescritura**: Una clase hija puede tener un método con el mismo nombre que el padre para cambiar su comportamiento.
- **Limitación**: En TypeScript/JavaScript, una clase solo puede heredar de **una** sola clase padre.

