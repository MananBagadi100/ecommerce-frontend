import axios from 'axios'
import '../styles/RegisterStyles.css'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
const Register = () => {
    const [serverError , setServerError] = useState('')
    const navigate = useNavigate()
    const {loginState , setLoginState} = useContext(LoginContext)
    const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE
    const {
        register,
        handleSubmit,
        watch,
        clearErrors,
        setError,   //for custom errors from server
        formState: { errors,isSubmitting,},
    } = useForm({ criteriaMode : 'all'})
    const onSubmit = async(data) => {
        setServerError('')
        if(data.password !== data.confirmPassword) {    //setting our own custom errors
            setError("noMatch",{message:"Password and Confirm Password do not match"})
            return
        }
        clearErrors("noMatch")
        console.log('The registration form data is ',data)
        const ans = await axios.post(`${backendRouteURL}/api/register`,data,{withCredentials:true})
        console.log(ans.data)
        const LoginStatus = ans.data.isLoggedIn
        if (LoginStatus) {
            navigate('/')
            setLoginState(true)
        }
        else {
            setServerError(`${ans.data.msg}`)
        }
        return
    }
    return (
        <>
        {isSubmitting && (<div>Loading ... </div>)}
            <div className="register-full-page-container">
                <div className="register-main-heading-container">Registration Page</div>
                <div className="register-content-area">
                    <div className="registration-form-area">
                        <div className="registration-form-heading">Registration Form</div>
                        <form className="registration-form-details" onSubmit={handleSubmit(onSubmit)}>
                            <div className="registration-input-field-wrapper">
                                <input
                                    className='register-input-field'
                                    {...register("username",{required:{value:true,message:"Username is required"},
                                        minLength:{value:5,message:"Min length of username should be 5"},
                                        maxLength:{value:35,message:"Max length of username is 35"},
                                        pattern:{value:/^[A-Za-z0-9@.]+$/,message:"Only letters, numbers ,@ and . is allowed"}
                                    })}
                                    placeholder="Enter your Username"
                                />
                                {errors.username?.types?.required && (<div className='field-errors'>{errors.username.types.required}</div>)}
                                {errors.username?.types?.minLength && (<div className='field-errors'>{errors.username.types.minLength}</div>)}
                                {errors.username?.types?.maxLength && (<div className='field-errors'>{errors.username.types.maxLength}</div>)}
                                {errors.username?.types?.pattern && (<div className='field-errors'>{errors.username.types.pattern}</div>)}
                            </div>

                            <div className="registration-input-field-wrapper">
                                <input
                                    className='register-input-field'
                                    {...register("email",{required:{value:true,message:"Email is required"},
                                        minLength:{value:5,message:"Min length of username should be 5"},
                                        maxLength:{value:35,message:"Max length of username is 35"},
                                        pattern:{value:/^[A-Za-z0-9@.]+$/,message:"Only letters, numbers ,@ and . is allowed"}
                                    })}
                                    placeholder="Enter your Email"
                                />
                                {errors.email?.types?.required && (<div className='field-errors'>{errors.email.types.required}</div>)}
                                {errors.email?.types?.minLength && (<div className='field-errors'>{errors.email.types.minLength}</div>)}
                                {errors.email?.types?.maxLength && (<div className='field-errors'>{errors.email.types.maxLength}</div>)}
                                {errors.email?.types?.pattern && (<div className='field-errors'>{errors.email.types.pattern}</div>)}
                            </div>

                            <div className="registration-input-field-wrapper">
                                <input
                                    className='register-input-field'
                                    {...register("contactNo",{required:{value:true,message:"Contact No. is required"},
                                        minLength:{value:10,message:"Contact No. should have 10 digits"},
                                        maxLength:{value:12,message:"Invalid contact No."},
                                        pattern:{value:/^[0-9]+$/,message:"Only numbers are allowed"}
                                    })}
                                    placeholder="Enter your Contact No."
                                />
                                {errors.contactNo?.types?.required && (<div className='field-errors'>{errors.contactNo.types.required}</div>)}
                                {errors.contactNo?.types?.minLength && (<div className='field-errors'>{errors.contactNo.types.minLength}</div>)}
                                {errors.contactNo?.types?.maxLength && (<div className='field-errors'>{errors.contactNo.types.maxLength}</div>)}
                                {errors.contactNo?.types?.pattern && (<div className='field-errors'>{errors.contactNo.types.pattern}</div>)}
                            </div>

                            <div className="registration-input-field-wrapper">
                                <input
                                    className='register-input-field'
                                    {...register("password",{required:{value:true,message:"Password is required"},
                                        minLength:{value:5,message:"Min length of password should be 5"},
                                        maxLength:{value:35,message:"Max length of password is 35"},
                                        pattern:{value:/^[A-Za-z0-9@*$#]+$/,message:"Only letters, numbers , @,*,$,# are allowed"}
                                    })}
                                    type='password'
                                    placeholder="Enter your Password"
                                />
                                {errors.password?.types?.required && (<div className='field-errors'>{errors.password.types.required}</div>)}
                                {errors.password?.types?.minLength && (<div className='field-errors'>{errors.password.types.minLength}</div>)}
                                {errors.password?.types?.maxLength && (<div className='field-errors'>{errors.password.types.maxLength}</div>)}
                                {errors.password?.types?.pattern && (<div className='field-errors'>{errors.password.types.pattern}</div>)}
                            </div>

                            <div className="registration-input-field-wrapper">
                                <input
                                    className='register-input-field'
                                    {...register("confirmPassword",{required:{value:true,message:"Confirm Password is required"}
                                    })}
                                    type='password'
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword?.types?.required && (<div className='field-errors'>{errors.confirmPassword.types.required}</div>)}
                                {errors.noMatch && (<div className='field-errors'>{errors.noMatch.message}</div>)}
                            </div>
                            <div className="userCredentials-error">{serverError}</div>
                            <div className="registration-submit-btn-wrapper">
                                <input type='submit' 
                                    value='Submit' 
                                    disabled={isSubmitting} 
                                    className='registration-submit-btn'
                                />
                            </div> 
                        </form>
                    </div>
                </div>            
            </div>
        </>
    )
}
export default Register