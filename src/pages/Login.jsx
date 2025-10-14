import '../styles/LoginStyle.css'
import { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { useForm } from 'react-hook-form'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios'
//storeLoginState is a global function to change the login state 
const Login= () => {
    const [ serverError , setServerError] = useState('')
    const navigate = useNavigate()
    const {loginState,setLoginState} = useContext(LoginContext)
    const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors,isSubmitting,},
    } = useForm({ criteriaMode : 'all'})
    const onSubmit = async (data) => {
        setServerError('')
        console.log('The name is ',data)
        const answer = await axios.post(`${backendRouteURL}/api/login`,data,{withCredentials:true})
        console.log("Server response ",answer.data)
        const loginStatus = answer.data.isLoggedIn
        if(loginStatus) { 
            setLoginState(true)
            navigate('/')
        }
        else {
            setServerError(`${answer.data.msg}`)
        }
    }
    async function handleLogout () {
        const answer = await axios.post(`${backendRouteURL}/api/logout`,{},{withCredentials:true})
        setLoginState(answer.data.isLoggedIn)
    }
    if(loginState === false ) {
        return (
            <>
            {isSubmitting && <div>Loading .. </div>}
                <div className='login-full-container'>
                    <div className="login-content-area">
                        <div className='login-dialog-box-container'>
                            <div className='login-heading-container'>Login</div>
                            <form className='login-details-container' onSubmit={handleSubmit(onSubmit)}>
                                <div className='login-input-container-wrapper'>
                                    <div className="login-input-container">
                                        <div className='login-field-input-icons'>
                                            <AccountCircleIcon sx={{fontSize:36}}/>
                                        </div>
                                        <input type='text'
                                            className='login-input-fields' 
                                            {...register("username",
                                                {required:true,minLength:{value:5,message:"Min length should be 5"},
                                                maxLength:{value:35,message:"Max length should not exceed 35"}})}
                                            placeholder='Enter your username'>
                                        </input>
                                    </div>
                                    {errors.username && <div className='login-input-field-errors'>{errors.username.message}</div>}
                                </div>
                                <div className='login-input-container-wrapper'>
                                    <div className="login-input-container">
                                        <div className='login-field-input-icons'>
                                            <KeyIcon sx={{fontSize:36}}/>
                                        </div>
                                        <input type='password'
                                            className='login-input-fields' 
                                            {...register("password",
                                                {required:true,minLength:{value:5,message:"Password min length should be 5"},
                                                maxLength:{value:35,message:"Password max length should not exceed 35"},
                                                pattern: {value:/^[A-Za-z0-9@]+$/,message:"No special charecters except @"}})}
                                            placeholder='Enter your password'>
                                        </input>
                                    </div>
                                    {errors.password?.types?.minLength && (
                                    <div className="login-input-field-errors">Password min length should be 5</div>)}
                                    {errors.password?.types?.maxLength && (
                                    <div className="login-input-field-errors">Password max length should not exceed 35</div>)}
                                    {errors.password?.types?.pattern && (
                                    <div className="login-input-field-errors">No special characters except @</div>)}
                                </div>
                                <div className="wrongCredentials-error">{serverError}</div>
                                <div className="login-submit-btn-wrapper">
                                    <input 
                                        className='login-submit-btn' 
                                        type='submit'
                                        disabled={isSubmitting} 
                                        value="Submit"
                                    />                   
                                </div>
                                <div className='registration-link'>New User ? <a href='/register'>Register Now !</a></div>
                                
                            </form>
                        </div>
                    </div>    
                </div>
            </>
        )
    }
    else {
        return (
            <div className='loggedIn-full-container'>
                <div className='logoutBtnText'>Hey you are already logged in !</div>
                <button className='logoutBtn' onClick={handleLogout}>Logout</button>
            </div>
        )
    }
}
export default Login