import { Router } from 'express'; // Importamos Router desde express
import { getEmployees, updateAllCampEmployee, deleteEmployee, createEmployee, getEmployeeById, updateEmployee } from '../controllers/employees.controller.js'; // Importamos la función getEmployees desde employees.controller.js

const router = Router(); // Creamos una instancia de Router

router.get('/employees', getEmployees); // Llamamos getEmployees en la ruta /employees

router.get('/employees/:id', getEmployeeById); // Llamamos getEmployees en la ruta /employees/:id

router.post('/employees', createEmployee); // Llamamos createEmployee en la ruta /employees

router.patch('/employees/:id', updateEmployee); // Llamamos updateEmployee en la ruta /employees/:id (Actualiza un campo)

router.put('/employeesall/:id', updateAllCampEmployee); // Llamamos updateEmployee en la ruta /employees (Actualiza todos los campos)

router.delete('/employees/:id', deleteEmployee); // Llamamos deleteEmployee en la ruta /employees

export default router;

/* Métodos endpoints:

(router)app.get('/', (req, res) req: request(Pedido), res: response(Respuesta)
(router)app.post('/', (req, res)
(router)app.put('/', (req, res)
(router)app.delete('/', (req, res)

*/