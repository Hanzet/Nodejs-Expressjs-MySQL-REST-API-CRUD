import { createPool } from 'mysql2/promise'; // Se importa la función createPool de la librería mysql2/promise

export const pool = createPool({ // Lo que se hace es crear una conexión a la base de datos
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'companydb',
    port: 3306,
})