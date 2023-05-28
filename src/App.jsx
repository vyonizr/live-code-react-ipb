import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

const DUMMY_TODO = [
  {
    id: nanoid(),
    title: 'Belajar React',
    isCompleted: false
  }
]

function App() {
  const [todos, setTodos] = useState(DUMMY_TODO)
  const [newTodo, setNewTodo] = useState('')

  function addNewTodo() {
    const updatedTodos = [...todos]
    const objTodo = {
      id: nanoid(),
      title: newTodo,
      isCompleted: false
    }

    updatedTodos.push(objTodo)
    setTodos(updatedTodos)
    setNewTodo('')
  }

  function completeTodo(targetTodoId) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === targetTodoId) {
        todo.isCompleted = !todo.isCompleted
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type='text'
        placeholder='Isi todo di sini'
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
      />
      <button onClick={() => addNewTodo()} >Create</button>
      <ul>
        {
          todos.map(todo => (
            <li
              key={todo.id}
              className='todo-item'
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none'
              }}
            >
              <input type='checkbox' onChange={() => completeTodo(todo.id)} />
              {todo.title}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
