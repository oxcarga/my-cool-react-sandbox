function AddForm({ todos, setTodo, setShowAddForm }) {
  const handleKeyDown = (ev) => {
    console.log(ev.keyCode)
    if (ev.keyCode === 13) {
      addTodo(ev.target)
    }
    if (ev.keyCode === 27) {
      setShowAddForm(false)
    }
  }

  const addTodo = (target) => {
    let id = Math.max(...todos.map((t) => t.id)) + 1
    id = id === -Infinity ? 1 : id
    setTodo([...todos, { id, text: target.value, completed: false }])
    target.value = ''
  }

  return (
    <input
      autoFocus
      type="text"
      placeholder="Add new todo"
      onKeyDown={handleKeyDown}
    />
  )
}

export default AddForm
