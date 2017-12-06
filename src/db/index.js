import Nano from 'nano'
import envs from '../config/env'

export default class couchDB {
  constructor () {
    this.conn = envs.vars.db_host
    this.db = envs.vars.db_name
  }

  connect () {
    let conn = Nano(this.conn)
    return conn.db.use(this.db)
  }

  getConn () {
    return this.conn
  }

  setConn (conn) {
    this.conn = conn
  }

  getDB () {
    return this.db
  }

  setDB (db) {
    this.db = db
  }
}
