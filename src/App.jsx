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
  const [error, setError] = useState('')

  function addNewTodo() {
    if (newTodo.length === 0) {
      setError('Todo tidak boleh kosong')
    } else {
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

  function handleChange(event) {
    setNewTodo(event.target.value)
    setError('')
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type='text'
        placeholder='Isi todo di sini'
        value={newTodo}
        onChange={event => handleChange(event)}
      />
      <button onClick={() => addNewTodo()} >Create</button>
      {
        error.length > 0 ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : null
      }
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
