/* Paquetes en uso: npm i express, npm i nodemon -D, npm i mysql2 */
/* Se utiliza en package.json "dev": "nodemon src/index.js" para ejecutar el script del servidor  */

import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express(); // Inicializamos express

app.use(express.json()); // Para que express entienda los datos que vienen en formato JSON

app.use(indexRoutes); // Usamos las rutas de index
app.use('/api', employeesRoutes); // usamos /api para que todas las rutas de employees tengan /api luego de la url, y employeesRoutes para las rutas de empleados

app.listen(3000);
console.log('Server running on port', 3000);