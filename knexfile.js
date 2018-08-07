require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///linky_db'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
