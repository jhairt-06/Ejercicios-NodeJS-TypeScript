# Evaluación Práctica #1 — Node.js y TypeScript

**Autor:** Jaime Patiño | **Sección:** 8-B | **Docente:** Carlos Márquez  
**Unidad Curricular:** Programación III — UNETI, Mayo 2026

---

## Descripción General

Este repositorio contiene la resolución de dos ejercicios prácticos enfocados en el desarrollo backend con Node.js y el tipado estático con TypeScript. Cada ejercicio explora conceptos fundamentales del desarrollo moderno: el ciclo de vida de una petición HTTP y la definición de estructuras de datos constantes mediante enumeradores.

---

## Estructura del Repositorio

```
raiz/
├──Ejercicio 1-NodeJs/
    ├── 📄 server.js              # Servidor HTTP nativo de Node.js (Ejercicio 1)
    ├── 📄 vista1.html            # Formulario de entrada (Ejercicio 1)
    ├── 📄 vista2.html            # Vista de resultado con plantilla (Ejercicio 1)
├──Ejercicio 2-TypeScript/
    ├── 📄 ejercicio2.ts          # Script de enumeradores en TypeScript (Ejercicio 2)
└── 📄 Documento_Técnico__NodeJS-TypeScript.pdf
```

---

## Ejercicio 1 — Intercepción de Peticiones y Manejo de Vistas en Node.js

### ¿Qué hace?

Un servidor web construido **sin frameworks externos** (solo módulos nativos de Node.js) que:

1. Sirve un formulario HTML (`vista1.html`) donde el usuario ingresa su animal favorito.
2. Intercepta el envío del formulario vía método `POST` en la ruta `/procesar`.
3. Extrae el dato recibido, lo inyecta en una segunda plantilla HTML y devuelve `vista2.html` con el resultado personalizado.

### Archivos involucrados

| Archivo | Rol |
|---|---|
| `server.js` | Lógica del servidor: enrutamiento, lectura de archivos y procesamiento POST |
| `vista1.html` | Formulario con campo de texto y botón de envío |
| `vista2.html` | Plantilla de resultado con la variable `{{animalFavorito}}` |

### Cómo ejecutarlo

> Requisito: tener [Node.js](https://nodejs.org) instalado.

```bash
# Desde la raíz del proyecto:
node server.js
```

Luego abre tu navegador en:

```
http://localhost:3006
```

### Lógica del Servidor

El servidor se apoya en tres etapas clave:

- **Escucha de eventos** — `req.on('data')` acumula los fragmentos del cuerpo de la petición POST hasta tenerlo completo.
- **Intercepción** — Al detectar la ruta `/procesar`, se parsea el cuerpo con `querystring.parse()` y se extrae el valor del campo `animal`.
- **Inyección de datos** — Con `String.replaceAll()` se reemplaza el marcador `{{animalFavorito}}` en el HTML antes de enviarlo al cliente.

---

## Ejercicio 2 — Enumeradores en TypeScript

### ¿Qué hace?

Un script en TypeScript que define dos `enum` con valores de texto legibles (string enums) y los recorre automáticamente para imprimirlos en consola, demostrando la ventaja del tipado estricto para gestionar listas cerradas de datos.

Los enumeradores definidos son:

- `GeneroPelicula` — Acción, Comedia, Drama, Terror, Ciencia Ficción
- `PaisPelicula` — Estados Unidos, España, México, Argentina, Corea del Sur

### Cómo ejecutarlo

> Requisito: tener [Node.js](https://nodejs.org) y [TypeScript](https://www.typescriptlang.org/) instalados.

```bash
# Opción A — Compilar y ejecutar
tsc ejercicio2.ts
node ejercicio2.js

# Opción B — Ejecutar directamente con ts-node
npx ts-node ejercicio2.ts
```

### Salida esperada en consola

```
GÉNEROS DE PELÍCULAS DISPONIBLES:
- Acción
- Comedia
- Drama
- Terror
- Ciencia Ficción

 PAÍSES DE ORIGEN DISPONIBLES:
- Estados Unidos
- España
- México
- Argentina
- Corea del Sur
```

### Concepto clave

`Object.values(Enum)` convierte las estructuras estáticas del `enum` en arreglos dinámicos que pueden recorrerse con `forEach`, eliminando la necesidad de escribir manualmente cada línea de salida.

---

## Documentación Técnica

El archivo PDF incluye para cada ejercicio:

- Descripción de la solución
- Implementación de código con capturas
- Resultados obtenidos
- Explicación de la lógica aplicada

---

## Referencias

- Node.js Foundation. (2024). *HTTP module documentation*. https://nodejs.org/api/http.html
- Microsoft Corporation. (2024). *TypeScript HandBook: Enums*. https://www.typescriptlang.org/docs/handbook/enums.html
- freeCodeCamp. (2024). *Aprende TypeScript - Curso desde cero*. https://www.freecodecamp.org/espanol/news/aprende-typescript-curso-desde-cero
- W3Schools. (2026). *Node.js Tutorial*. https://www.w3schools.com/nodejs
