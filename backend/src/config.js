require('dotenv').config();


module.exports = {
    app: {
        port: process.env.PORT || 8889
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost:8889',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'root',
        database: process.env.MYSQL_DB || 'raites'
    }
}