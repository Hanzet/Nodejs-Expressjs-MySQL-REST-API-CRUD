import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee') // Consulta todos los empleados
    res.json(rows) // Devuelve los empleados en formato JSON
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body // Extrae los datos del cuerpo de la petición
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]) // Inserta los datos en la base de datos
    res.send({ // Envía una respuesta al cliente
        id: rows.insertId, // Devuelve el ID del empleado insertado
        name,
        salary
    })
}

export const updateEmployee = (req, res) => res.send('Actualizar empleado')

export const deleteEmployee = (req, res) => res.send('Eliminar empleado')