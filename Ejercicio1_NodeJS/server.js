const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    
    // Carga del formulario
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('vista1.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error interno del servidor al cargar vista 1');
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    }
    
    // Intercepción de los datos del formulario
    else if (req.url === '/procesar' && req.method === 'POST') {
        let cuerpoPeticion = '';

        // REcibe los datos del formulario por fragmentos y los junta
        req.on('data', chunk => {
            cuerpoPeticion += chunk.toString();
        });

        // Una vez que se termina de recibir toda la info:
req.on('end', () => {
    // Transforma el string recibido a un objeto
            const datosParseados = querystring.parse(cuerpoPeticion);
            const nombreDelAnimal = datosParseados.animal;

            // Imprime en la terminal lo que el formulario envió
            // Si sale undefined o vacío, hubo un problema con el formulario
            console.log("Dato interceptado del formulario:", nombreDelAnimal);

            // Lee la segunda vista para prepararla antes de enviarla

            fs.readFile('vista2.html', 'utf8', (err, data) => {
                if (err) return res.end('Error');

                // Reemplazala variable del HTML por el dato interceptado
                const paginaActualizada = data.replaceAll('{{animalFavorito}}', nombreDelAnimal);

                // Regresa la nueva página con el nombre del animal ya puesto 

                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(paginaActualizada);
            });
        });
    }
    
    // Ruta por defecto (Fallback)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página no encontrada');
    }
});

// Iniciamos la escucha del servidor en el puerto 3000
server.listen(3006, () => {
    console.log('Servidor activo. Por favor, abre http://localhost:3006 en tu navegador.');
});