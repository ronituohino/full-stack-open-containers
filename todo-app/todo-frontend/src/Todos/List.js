import React from 'react'
import Todo from './Todo/Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id}>
          <hr />
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </div>
      ))}
    </>
  )
}

export default TodoList
