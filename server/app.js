import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import tasks from './routes/tasks.js'

const port = 3000
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/tasks', tasks)
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Task Management API' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
