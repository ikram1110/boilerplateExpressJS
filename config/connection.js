const development = {
  database: 'database_name',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'postgres'
}

const test = {
  database: 'database_name',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'postgres'
}
const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'postgres'
}

module.exports = {
  development,
  test,
  production
}