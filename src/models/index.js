import Db from '../db'
// import nano from 'nano'
// import envs from '../config/env'

class dbModel {
  constructor () {
    this.db = new Db()
    this.conn = this.db.connect()
  }

  insert () {

  }

  update () {

  }

  delete () {

  }

  select () {

  }
}

export default dbModel
