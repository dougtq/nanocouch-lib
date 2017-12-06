import express from 'express'
import bodyParser from 'body-parser'

import allowcors from './config/cors'


const app = express()

app.use(allowcors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)

app.listen(app.set('port'), () => {
  console.log(`BACKEND is runing on http://localhost:${app.set('port')}`)
})

export default app
