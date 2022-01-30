const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { getAsync, setAsync } = require('./redis')

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')
const statisticsRouter = require('./routes/statistics')

const app = express()

const redisSetup = async () => {
  const addedTodos = await getAsync('added_todos')
  if (!addedTodos) {
    await setAsync('added_todos', 0)
  }
}

redisSetup()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/todos', todosRouter)
app.use('/statistics', statisticsRouter)

module.exports = app
