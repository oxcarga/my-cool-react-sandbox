import { useState } from 'react'
import AddTodoBtn from './AddTodoBtn'

function NavBar({
  todos,
  setTodo,
  setShowAddForm,
  sortTodos,
  inOrder,
  setInOrder,
  completedFirst,
  setCompletedFirst,
}) {
  const handlerChangeInOrder = (ev) => {
    const _inOrder = !inOrder
    setInOrder(_inOrder)
    setTodo([...sortTodos(todos, _inOrder, completedFirst)])
  }

  const handlerChangeCompletedFirst = (ev) => {
    debugger
    const _completedFirst = !completedFirst
    setCompletedFirst(_completedFirst)
    setTodo([...sortTodos(todos, inOrder, _completedFirst)])
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          TODOS
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={inOrder}
                onChange={handlerChangeInOrder}
              />
              <span className="label-left">Show in order</span>
            </label>
          </li>
          {!inOrder && (
            <li>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={completedFirst}
                  onChange={handlerChangeCompletedFirst}
                />
                <span className="label-left">Completed First</span>
              </label>
            </li>
          )}
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <AddTodoBtn todos={todos} setShowAddForm={setShowAddForm} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
