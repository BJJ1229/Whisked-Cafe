import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'


function Protected({children}) {
  const customer = useContext(AuthContext)

  return customer ? <Navigate to='/login'/> : children
}

export default Protected