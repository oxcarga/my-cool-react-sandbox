function Header({ completed, all }) {
  return (
    <h1 style={{ textAlign: 'center' }}>
      {completed} de {all} completados
    </h1>
  )
}

export default Header
