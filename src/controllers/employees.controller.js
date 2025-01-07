import { pool } from '../db.js'

/* El [req.params.id] nos ayuda a recibir un parametro desde la Url, nos ayudua a buscar un parametro y eliminarlo o buscarlo y devolverlo al cliente, como buscarlo también y actualizarlo al cliente.
Y el req.body que extrae los datos del cuerpo de la petición
*/

export const getEmployees = async (req, res) => {
    try {
        // throw new Error('Error de prueba') // Lanza un error de prueba
        const [rows] = await pool.query('SELECT * FROM employee') // Consulta todos los empleados
        res.json(rows) // Devuelve los empleados en formato JSON
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal',
        })
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]) // Consulta un empleado por ID, el req.params.id obtiene el ID de la URL
        if (rows.length <= 0) { // Si no hay empleados (length devuelve la cantidad de elementos en el array)
            return res.status(404).json({ message: "Empleado no encontrado" }) // Devuelve un mensaje de error
        }
        res.json(rows[0]) // Devuelve el empleado en formato JSON, [0] sería el primer elemento del array
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal',
        })
    }
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body // Extrae los datos del cuerpo de la petición

    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]) // Inserta los datos en la base de datos
        res.send({ // Envía una respuesta al cliente
            id: rows.insertId, // Devuelve el ID del empleado insertado
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal',
        })
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body

    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]) // Actualiza un empleado por ID

        if (result.affectedRows === 0) { // Si no se actualizó ningún empleado
            return res.status(404).json({ message: "Empleado no encontrado" }) // Devuelve un mensaje de error
        }
    
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]) // Consulta un empleado por ID
    
        res.json(rows[0]) // Devuelve el empleado en formato JSON
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal',
        })
    }
}

export const updateAllCampEmployee = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body

    try {
        const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id]) // Actualiza un empleado por ID

        if (result.affectedRows === 0) { // Si no se actualizó ningún empleado
            return res.status(404).json({ message: "Empleado no encontrado" }) // Devuelve un mensaje de error
        }
    
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]) // Consulta un empleado por ID
    
        res.json(rows[0]) // Devuelve el empleado en formato JSON
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal',
        })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]) // Elimina un empleado por ID
        if (result.affectedRows <= 0) { // Si no se eliminó ningún empleado
            return res.status(404).json({ message: "Empleado no encontrado" }) // Devuelve un mensaje de error
        }
            res.sendStatus(204) // Devuelve un estado 204 (sin contenido) si se eliminó el empleado
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal',
        })
    }
}