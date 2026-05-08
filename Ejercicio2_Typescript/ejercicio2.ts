// Un 'enum' agrupa opciones lógicas. Le asignamos un valor de texto (string) 
// a cada opción para que, al mostrarlo en pantalla, sea legible para el usuario.

enum GeneroPelicula {
    Accion = "Acción",
    Comedia = "Comedia",
    Drama = "Drama",
    Terror = "Terror",
    CienciaFiccion = "Ciencia Ficción"
}

enum PaisPelicula {
    EstadosUnidos = "Estados Unidos",
    Espana = "España",
    Mexico = "México",
    Argentina = "Argentina",
    CoreaDelSur = "Corea del Sur"
}


// Usa Object.values() para extraer únicamente los valores de texto de nuestros enumeradores
// y convertirlos en una lista para poder recorrerla item por item.

console.log("GÉNEROS DE PELÍCULAS DISPONIBLES:");

// Recorre el array de géneros usando un forEach.
// Por cada iteración, 'genero' tomará el valor de la opción actual y la imprime.
Object.values(GeneroPelicula).forEach((genero) => {
    console.log(`- ${genero}`);
});

// Se usa un \n para separar ambas listas en la consola.
console.log("\n PAÍSES DE ORIGEN DISPONIBLES:");

// Se usa la misma lógica de extracción e iteración para los países.
Object.values(PaisPelicula).forEach((pais) => {
    console.log(`- ${pais}`);
});