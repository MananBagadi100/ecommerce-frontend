import React from 'react'
import '../styles/NavbarStyles.css'
import { NavLink } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about-us', label: 'About-us' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/cart', label: 'Cart' },
  ]

  const [loginBtnValue, setLoginBtnValue] = useState('Login')
  const [themeBtnTxt, setThemeBtnTxt] = useState('☀️')
  const [theme, setTheme] = useState('light')
  const value = useContext(LoginContext)

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.add('dark-theme')
      setTheme('dark')
      setThemeBtnTxt('🌙')
    } else {
      document.body.classList.remove('dark-theme')
      setTheme('light')
      setThemeBtnTxt('☀️')
    }
  }

  useEffect(() => {
    value.loginState === true ? setLoginBtnValue('Logged IN !') : setLoginBtnValue('Login')
  }, [value.loginState])

  return (
    <nav className='navbar'>
      <button className='nav-hamburger' onClick={toggleMenu} aria-label='Toggle Navigation menu'>
        ☰
      </button>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        {navItems.map((items) => (
          <li key={items.path} className='nav-item'>
            <NavLink to={items.path} onClick={() => setMenuOpen(false)}>
              {items.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className={`nav-btn-list ${menuOpen ? 'open' : ''}`}>
        <li key='/login' className='nav-btn-item'>
          <NavLink to='/login' onClick={() => setMenuOpen(false)}>
            {loginBtnValue}
          </NavLink>
        </li>
        <li className='nav-btn-item-2'>
          <button className='nav-toggle-theme-btn' onClick={toggleTheme}>
            {themeBtnTxt}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar