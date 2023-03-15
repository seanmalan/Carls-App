const { Pool } = require("pg");
const database = process.env.PGDATABASE
const password = process.env.PGPASSWORD
const user = process.env.PGUSER
const host = process.env.PGHOST
const pool = new Pool({
  host: host,
  user: user,
  password: password,
  database: database,
  port: "5432",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  end: () => {
    pool.end();
  },
};



// check the way katrina showed you with doing the rest file in vscode and then itll run the get request from inside vscode