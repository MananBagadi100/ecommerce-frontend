import '../styles/NavbarStyles.css'
import {NavLink} from 'react-router-dom'
import {useState, useContext, useEffect} from 'react'
import {LoginContext} from '../context/LoginContext'
import { MenuOpen } from '@mui/icons-material'

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    console.log('The width is ', window.innerWidth)
    const navItems = [
        {path: '/', label: 'Home' }, 
        {path: '/products', label: 'Products' }, 
        {path: '/about-us', label: 'About-us' }, 
        {path: '/contact-us', label: 'Contact Us' }, 
        {path: '/cart', label: 'Cart' }
    ]

    const [loginBtnValue, setLoginBtnValue] = useState('Login')
    const [themeBtnTxt, setThemeBtnTxt] = useState('☀️') 
    const [theme, setTheme] = useState('light') 

    const toggleTheme = () => {
        if (theme === 'light') {
            document
                .body
                .classList
                .add('dark-theme')
            setTheme('dark')
            setThemeBtnTxt('🌙')
        } else {
            document
                .body
                .classList
                .remove('dark-theme')
            setTheme('light')
            setThemeBtnTxt('☀️')
        }
    }

    // useEffect(() => {
    //     value.loginState === true
    //         ? setLoginBtnValue('Logged IN !')
    //         : setLoginBtnValue('Login')
    // }, [value.loginState])

    return (
        <div className="navbar-full-container">
            <div className="navbar-content-area">
                <div className={`navbar-item-links-${MenuOpen ? 'mobile': 'desktop'} `}>
                    {
                        <ul className='navbar-item-list'>
                            {
                                navItems.map((item) => (
                                    <li className='navbar-item' key={item.label}>
                                        <NavLink to={`${item.path}`}>{item.label}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar