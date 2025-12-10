import '../styles/NavbarStyles.css'
import {NavLink} from 'react-router-dom'
import {useState, useContext, useEffect} from 'react'
import {LoginContext} from '../context/LoginContext'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [drawerStatus , setDrawerStatus] = useState(false)
    const navItems = [
        {path: '/', label: 'Home' }, 
        {path: '/products', label: 'Products' }, 
        {path: '/about-us', label: 'About-us' }, 
        {path: '/contact-us', label: 'Contact Us' }, 
        {path: '/cart', label: 'Cart' }
    ]
    const value = useContext(LoginContext)
    const [loginBtnValue, setLoginBtnValue] = useState('Login')
    const [themeBtnTxt, setThemeBtnTxt] = useState('☀️') 
    const [theme, setTheme] = useState('light') 
    //To toggle dark/light theme 
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
    //checks weather user is logged in or not , then updates states respectively
    useEffect(() => {     
        value.loginState === true
            ? setLoginBtnValue('Logged IN !')
            : setLoginBtnValue('Login')
    }, [value.loginState])
    console.log('Drawer status is ',drawerStatus)

    return (
        <div className="navbar-full-container">
                {/* Default state - should be shown on mobile only*/ }
                <div className='navbar-mobile-content-area'>
                    <div className="navbar-hamburger-btn-wrapper">
                        <button className="navbar-hamburger-btn" onClick={() => setDrawerStatus(true)}>
                            <MenuOpenIcon />
                        </button>
                    </div>
                    <div className='navbar-swipable-drawer'>
                        <SwipeableDrawer
                            anchor='top'
                            open={drawerStatus}
                            onClose={() => {setDrawerStatus(false)}}
                            onOpen={() => {setDrawerStatus(true)}}
                            transitionDuration={{enter: 500,exit: 300}}
                            >
                                <div className="navbar-drawer-content-area">
                                    <NavLink to='/' className="navbar-drawer-item">
                                        <div className="navbar-drawer-item-icon-wrapper">
                                            <HomeIcon sx={{ fontSize: 30, color: 'white' ,display: 'flex', flex: '1 1 auto'}}/>
                                        </div>
                                        <div className='navbar-item-label'>Home</div>
                                    </NavLink>
                                    <NavLink to='/products' className="navbar-drawer-item">
                                        <div className="navbar-drawer-item-icon-wrapper">
                                            <InventoryIcon sx={{ fontSize: 30, color: 'white' ,display: 'flex', flex: '1 1 auto'}}/>
                                        </div>
                                        <div className='navbar-item-label'>Products</div>
                                    </NavLink>
                                    <NavLink to='/about-us' className="navbar-drawer-item">
                                        <div className="navbar-drawer-item-icon-wrapper">
                                            <InfoIcon sx={{ fontSize: 30, color: 'white' ,display: 'flex', flex: '1 1 auto'}}/>
                                        </div>
                                        <div className='navbar-item-label'>About us</div>
                                    </NavLink>
                                    <NavLink to='/contact-us' className="navbar-drawer-item">
                                        <div className="navbar-drawer-item-icon-wrapper">
                                            <PhoneIcon sx={{ fontSize: 30, color: 'white' ,display: 'flex', flex: '1 1 auto'}}/>
                                        </div>
                                        <div className='navbar-item-label'>Contact Us</div>
                                    </NavLink>
                                    <NavLink to='/cart' className="navbar-drawer-item">
                                        <div className="navbar-drawer-item-icon-wrapper">
                                            <ShoppingCartIcon sx={{ fontSize: 30, color: 'white' ,display: 'flex', flex: '1 1 auto'}}/>
                                        </div>
                                        <div className='navbar-item-label'>Cart</div>
                                    </NavLink>
                                    <NavLink to='/login' className="navbar-drawer-login-btn">
                                        <div className="navbar-drawer-item-icon-wrapper">
                                            <LoginIcon sx={{ fontSize: 30, color: 'white',display: 'flex', flex: '1 1 auto'}}/>
                                        </div>
                                        <div className='navbar-item-login-label'>Login</div>
                                    </NavLink>
                                    <div className="navbar-drawer-close-btn-wrapper">
                                        <button className='navbar-drawer-close-btn' onClick={() => setDrawerStatus(false)}>
                                            <CloseIcon /> Close
                                        </button>
                                    </div>
                                </div>

                        </SwipeableDrawer>
                    </div>
                </div>
                {/* should be shown on desktop only*/ }
                <div className='navbar-desktop-content-area'>
                    <ul className="navbar-desktop-list">
                        {
                            navItems.map((item) => (
                                <NavLink to={`${item.path}`} key={item.label} className="navbar-desktop-list-item-wrapper">
                                    <li className='navbar-desktop-list-item'>
                                        {item.label}
                                    </li>
                                </NavLink>
                            ))
                        }
                    </ul>
                    <NavLink to='/login' className="navbar-desktop-login-btn">
                        Login
                    </NavLink>
                </div>
        </div>
    )
}

export default Navbar