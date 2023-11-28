import { useEffect } from 'react'

function ListItem({ todo, todos, setTodo, sortTodos, inOrder }) {
  function handleClickLi(todoId) {
    const updated = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodo([...sortTodos(updated, inOrder)])
  }

  function handleClickRemove(ev, todoId) {
    ev.nativeEvent.stopPropagation()
    ev.nativeEvent.preventDefault()
    ev.nativeEvent.stopImmediatePropagation()
    todos = todos.filter((todo) => todo.id !== todoId)
    setTodo(todos)
  }

  return (
    <li
      key={todo.id}
      className={`collection-item todo-row todo-${todo.id} ${
        todo.completed ? 'completed' : ''
      }`}
      onClick={() => {
        handleClickLi(todo.id)
      }}
    >
      {todo.completed ? (
        <i className="material-icons">check_box</i>
      ) : (
        <i className="material-icons">check_box_outline_blank</i>
      )}

      <span>{todo.text}</span>

      <i
        className="material-icons waves-effect delete"
        onClick={(ev) => {
          handleClickRemove(ev, todo.id)
        }}
      >
        delete
      </i>
    </li>
  )
}

export default ListItem
