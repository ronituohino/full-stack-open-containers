const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { setAsync } = require('./redis')

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')
const statisticsRouter = require('./routes/statistics')

const app = express()
setAsync('added_todos', 0)

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/todos', todosRouter)
app.use('/statistics', statisticsRouter)

module.exports = app
