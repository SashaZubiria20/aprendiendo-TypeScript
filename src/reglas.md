
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
## Alias de Tipos (`type`)
- Es como crear un "molde" o una etiqueta personalizada para reutilizarla. Evita repetir código.
    Ej: `type miID = number | string;`

## Uniones (`|`)
- Permite que una variable acepte más de un tipo de dato (funciona como un "O").
    Ej: `let respuesta: string | boolean = "Éxito";`

## Intersecciones (`&`)
- Sirve para combinar dos o más tipos (moldes) en uno solo (funciona como un "Y").
    Ej: `type productoFinal = productoBasico & detallesExtra;`

## Tipos Literales
- La variable no solo tiene un tipo, sino que solo puede valer una de las opciones exactas que definamos.
    Ej: `type estadosDeMision = "en-curso" | "terminada";`