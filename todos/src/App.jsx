import { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/index.scss'
import NavBar from './NavBar'
import Header from './Header'
import ListWrapper from './ListWrapper'
import ListItem from './ListItem'
import AddForm from './AddForm'

function App() {
  const [todos, setTodo] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [inOrder, setInOrder] = useState(true)
  const [completedFirst, setCompletedFirst] = useState(false)

  useEffect(() => {
    console.log('Save stuff here!!')
  })

  const sortTodos = (todos, inOrderById, completedFirst) => {
    if (inOrderById) {
      return todos.sort((a, b) => {
        if (a.id < b.id) return -1
        else return 1
      })
    }
    const completed = todos.filter((t) => t.completed)
    const uncompleted = todos.filter((t) => !t.completed)
    return completedFirst
      ? [...completed, ...uncompleted]
      : [...uncompleted, ...completed]
  }

  return (
    <>
      <NavBar
        todos={todos}
        setTodo={setTodo}
        setShowAddForm={setShowAddForm}
        sortTodos={sortTodos}
        inOrder={inOrder}
        setInOrder={setInOrder}
        completedFirst={completedFirst}
        setCompletedFirst={setCompletedFirst}
      />

      <div className="container">
        {todos.length !== 0 && (
          <Header
            completed={todos.filter((todo) => todo.completed).length}
            all={todos.length}
          />
        )}

        <ListWrapper>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodo={setTodo}
              sortTodos={sortTodos}
              inOrder={inOrder}
            />
          ))}
        </ListWrapper>

        {(showAddForm || !todos.length) && (
          <AddForm
            todos={todos}
            setTodo={setTodo}
            setShowAddForm={setShowAddForm}
          />
        )}
      </div>
    </>
  )
}

export default App
