function AddTodoBtn({ todos, setShowAddForm }) {
  return (
    <a
      className="btn-floating btn-large waves-effect waves-light cyan pulse"
      onClick={() => {
        setShowAddForm(true)
      }}
    >
      <i className="material-icons">add</i>
    </a>
  )
}

export default AddTodoBtn
