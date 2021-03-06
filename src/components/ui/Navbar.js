import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/index'
export const Navbar = () => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const { user, dispatch } = authContext
  const handleLogout = () => {
    dispatch({ type: types.logout })
    navigate('/login', { replace: true })
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          ASOCIACIONES
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                to='/marvel'
                className={({ isActive }) =>
                  'nav-link ' + (isActive && 'active')
                }
              >
                Marvel
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/dc'
                className={({ isActive }) =>
                  'nav-link ' + (isActive && 'active')
                }
              >
                DC
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/search'
                className={({ isActive }) =>
                  'nav-link ' + (isActive && 'active')
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <span className='nav-link text-info'>{user.name}</span>
            </li>

            <li className='nav-item'>
              <button
                to='/login'
                className='nav-link btn'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
