import React from 'react'
import { Link } from "react-router-dom";

const Nosotros = () => {

  const [users, setUsers] = React.useState([])
  
  React.useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const user = await data.json()
    setUsers(user)
  }
  
  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {
          users.map(item => (
            <li key={ item.id }>
              <Link to={ `/nosotros/${item.id}` }>
                { item.name } - { item.email }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Nosotros
