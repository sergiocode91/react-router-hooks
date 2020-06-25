import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const {id} = useParams()
  const [users, setUsers] = React.useState([])
  
  React.useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const user = await data.json()
      setUsers(user)
    }
    obtenerDatos()
  }, [id])


  return (
    <div>
      <h3 className="mb-3">{ users.name }</h3>
        <ul>
          <li><b>Email:</b> { users.email }</li>
          <li><b>Username:</b> { users.username }</li>
          <li><b>Teléfono:</b> { users.phone }</li>
          <li><b>Website:</b> { users.website }</li>
        </ul>
    </div>
  )
}

export default User
