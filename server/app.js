require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const route = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/', route)
app.use(errorHandler)





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))