import fs from 'fs'
import path from 'path'
import morgan from 'morgan'

let sucessLog = fs.createWriteStream(path.join(__dirname, '../../logs/sucess.log'), { flags: 'a' })
let errorsLog = fs.createWriteStream(path.join(__dirname, '../../logs/errors.log'), { flags: 'a' })
let generalLog = fs.createWriteStream(path.join(__dirname, '../../logs/general.log'), { flags: 'a' })

morgan.token('error', (req, res) => { return (res.body.data.err || res.body.data.error || res.body.data.erro) })

let sucessInfo = morgan(':method :url :status :res[content-length] - :response-time ms', { skip: (req, res) => { return res.statusCode > 299 }, stream: sucessLog })
let errorsInfo = morgan(':method :url :status :res[content-length] - :response-time ms -- :error', { skip: (req, res) => { return res.statusCode < 300 }, stream: errorsLog })
let generalInfo = morgan(':method :url :status :res[content-length] - :response-time ms', { stream: generalLog })

export { sucessInfo, errorsInfo, generalInfo }
