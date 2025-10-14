import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useForm } from 'react-hook-form'
import '../styles/ContactUsStyles.css'
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react"
const ContactUs= () => {
    const [serverMessage , setServerMessage] = useState('')
    const [queryStatus , setQueryStatus] = useState(false)  //to find weather the user has send the query or not , this prevents multiple queries and database overloading 
    const {loginState} = useContext(LoginContext)
    const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE
    const {
        register,
        handleSubmit,
        watch,
        clearErrors,
        setError,   //for custom errors
        formState: { errors,isSubmitting,},
    } = useForm({ criteriaMode : 'all'})
    const onSubmit = async (data) => {
        setServerMessage('')
        console.log(data)
        try {
            const answer = await axios.post(`${backendRouteURL}/api/auth/contactForm`,data,{withCredentials:true})
            console.log('the answer from server is ',answer.data)
            if(answer.status === 200) {
                setServerMessage(`${answer.data.msg}`)
                setQueryStatus(true)
            }
        }
        catch (error) {
            setServerMessage(`Something went wrong. Try again later`)
        }
            
    }
    function handleAnotherQuery () {
        setQueryStatus(false)
        setServerMessage('')
    }
    if(loginState) {
        if(!queryStatus) {
            return (
                <>
                    <div className="contact-full-container">
                        <div className="contact-content-area">
                            <div className="contact-dialog-box">
                                <div className="contact-dialog-box-title">
                                    Contact Us
                                </div>
                                <div className="contact-dialog-box-details-area">
                                    <form className="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="contact-form-issue-dropdown">
                                            <label >Select your issue :</label>
                                            <select {...register("issueType")}>
                                                <option value="">Select Issue</option>
                                                <option value="productIssue">Product Issue</option>
                                                <option value="delivaryIssue">Delivary Issue</option>
                                                <option value="accountLoginIssue">Account Login Problems</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="contact-form-issue-describe">
                                            <textarea 
                                                {...register("issueMessage",{required:true,maxLength:{value:1000,message:"Max message length is 1000 charecters."}})}
                                                placeholder="Explain your issue ..."
                                            />
                                        </div>
                                        {errors.issueMessage && <div>{errors.issueMessage.message}</div>}
                                        <div className="contact-form-submit-btn-wrapper">
                                            <input 
                                                type="submit" 
                                                value="Submit"
                                                className="contact-form-submit-btn"
                                                disabled={isSubmitting}
                                            />
                                        </div>    
                                    </form>
                                    <div className="contact-us-server-message">{serverMessage}</div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </>
            )
        }
        else {
            return (
                <div className="contact-full-container">
                    <div className="contact-query-submitted-msg">Request submitted !</div>
                    <button className="contact-another-query-submit-btn" onClick={handleAnotherQuery}>Submit another request</button>
                </div>
            )
        }
    }
    else {
        return (
            <div className="contact-full-container">
                <div className="contact-logIn-message-wrapper">
                    <div className="contact-logIn-message">Please Login First to send messages !</div>
                    <Link to="/login" className="contact-logIn-redirect-btn">Proceed to Login</Link>
                </div>
            </div>
        )
    }
}
export default ContactUs