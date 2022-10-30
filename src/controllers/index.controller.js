const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'db',
    password: 'root',
    database: 'library',
    port: "5432"
});


const getBook = async(req, res) => {
    const response = await pool.query('select * from books');
    res.status(200).json({ Titulo:"llll", content:response.rows});
    //res.send(response.rows);
    console.log(response.rows);
    // pool.end(); 

};
const createTable = async(req, res) => {
    const response = await pool.query('create table books(nombre text, lugar text)');
    res.send('TABLA CREADA');

};

const setBook = async(req, res) => {
    // await pool.query('create table books(nombre text,lugar text)');
    console.log(req.query);
    const text = "insert into books values($1,$2)"
    datos = [req.query.nombre, req.query.lugar]
    await pool.query(text, datos);
    res.send('Datos registrados')

};

module.exports = {
    getBook,
    setBook,
    createTable
}
