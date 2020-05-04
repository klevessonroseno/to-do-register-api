module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'to_do_register',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};
