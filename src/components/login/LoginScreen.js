import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/index'
const LoginScreen = () => {
  const authContext = useContext(AuthContext)
  const { dispatch } = authContext

  const navigate = useNavigate()
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Ricardo' }
    }

    dispatch(action)

    const lastPath = localStorage.getItem('lastPath') || '/marvel'

    navigate(lastPath, { replace: true })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        login
      </button>
    </div>
  )
}

export default LoginScreen
