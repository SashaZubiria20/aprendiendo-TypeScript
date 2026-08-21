
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