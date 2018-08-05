const database = require("./database-connection");

module.exports = {
  list(db) {
    return database(db)
  },
  read(db, id) {
    return database(db)
           .select('*')
           .where('id', id)
           .first()
  },
  create(db, item) {
    return database(db)
           .insert(item)
           .returning('*')
           .then(record => record[0]);
  },
  update(db, id, item) {
    return database(db)
           .update(item)
           .where('id', id)
           .returning('*')
           .then(record => record[0])
  },
  delete(db, id) {
    return database(db)
           .select('*')
           .where('id', id)
           .del();
  }
}
