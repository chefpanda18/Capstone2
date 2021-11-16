const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pandaseatbamboo",
    host: "localhost",
    port: 5432,
    database: "daily_budget"
});

const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, data) => {
        if (err) {
            throw err;
        }
        res.status(200).json(data.rows);
    });
};

module.exports = {
    pool,
    getAllUsers,
};