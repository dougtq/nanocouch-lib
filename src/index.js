import express from 'express'
import bodyParser from 'body-parser'

import allowcors from './config/cors'
import { sucessInfo, errorsInfo, generalInfo } from './config/morgan'

const app = express()
app.use([sucessInfo, errorsInfo, generalInfo])
app.use(allowcors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)

app.listen(app.set('port'), () => {
  console.log(`BACKEND is runing on http://localhost:${app.set('port')}`)
})

export default app
