// import nano from 'nano'
import Db from '../db'
// import envs from '../config/env'

class dbModel {
  constructor () {
    this.db = new Db()
    this.conn = this.db.connect()
  }

  select (doc, view = 'by_type', query = { 'key': 'type', 'include_docs': true }) {
    this.db.view(doc, view, query, (err, body) => {
      if (err) return err.message

      return body.rows
    })
  }

  insert (data, id) {
    this.conn.insert(data, id, (err, body) => {
      if (err) return err.message

      return body
    })
  }

  update (obj, key, callback) {
    this.db.get(key, (err, existing) => {
      if (!err) return err.message
      obj._rev = existing._rev
      return this.insert(obj, key)
    })
  }

  delete (doc, id) {
    this.db.update(doc, id, (err, res) => {
      if (err) return err.message

      return true
    })
  }
}

export default dbModel
