import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

import usersRoutes from './routes/users.js '

const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    // console.log('test')
    res.send(`Navigate to port <strong>http://localhost:${PORT}/users</strong> to find users data`)
})

app.listen(PORT, () => console.log(`Express server listening on port: http://localhost:${PORT}`))