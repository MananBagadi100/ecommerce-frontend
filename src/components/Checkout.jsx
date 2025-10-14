import { useContext, useState } from "react"
import { cartContext } from "../context/CartContext"
import '../styles/CheckoutStyles.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import tick_mark from '../assets/Tick_mark.png'
import axios from "axios"

const Checkout = () => {
    const [orderStatus , setOrderStatus] = useState(false)
    const cartValue = useContext(cartContext)
    const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE
    const navigate = useNavigate()
    const cartTotal = cartValue.calculateTotal(cartValue.cart)
    const calculateSubTotal = (prod) => {
        return ((prod.price * prod.quantity).toFixed(2))
    }
    const navigateToHome = () => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors,isSubmitting,},
    } = useForm({ criteriaMode : 'all'})
    const onSubmit = async (data) => {
        console.log(data)
        const cartArray =JSON.parse(localStorage.getItem("cart"))
        console.log(cartArray)
        const payload = {
            cartItems : cartArray,
            ...data,
            total : cartTotal
        }
        const answer = await axios.post(`${backendRouteURL}/api/auth/checkout`,payload,{withCredentials:true})
        console.log('the answer is ',answer)
        if(answer.status === 200) {
            setOrderStatus(true)
            setTimeout(() => {
                navigate('/')
                setOrderStatus(false)
            },3000)
        }
    }
    if(orderStatus) {
        return (
            <div id="order-placed-wrapper">
                <div id="order-placed-heading">Order placed !</div><br />
                <div id="order-placed-subHeading">Thank You </div>
                <img  id="order-placed-image" src={tick_mark} alt="Image not found"/>
                <div>{navigateToHome()}</div>
            </div>
        )
    }
    else {
        return (
            <div className="full-page-container">
                <div className="all-info-container">
                    <div className="checkout-main-heading">Order Summary</div>
                    <div className="checkout-item-list">
                        {
                            cartValue.cart.map((prod) => (
                                <div className="checkout-eachProductCard" key={prod.id}>
                                    <div className="checkout-product-info">
                                        <div id="checkout-product-image-wrapper">
                                            <img id="checkout-product-image" src={prod.image} alt="Image not found" />
                                        </div>
                                        <div id="checkout-product-details">
                                            <div id="checkout-product-title">{prod.title}</div>
                                            <div id="checkout-product-price">Price: {prod.price}</div>
                                            <div id="checkout-product-quantity">Quantity : {prod.quantity}</div>
                                        </div>
                                    </div>
                                    <div id="checkout-product-subTotal">SubTotal : {calculateSubTotal(prod)}</div>
                                </div>

                            ))
                        }
                    </div>
                    <div id="checkout-total-wrapper">
                        <div id="checkout-total">Total : {cartValue.calculateTotal(cartValue.cart)}</div>
                    </div>
                    <div id="info-box-wrapper">
                        <div id="info-box">
                            <div id="info-box-content-area">
                                <div id="info-box-title-area">Additional Details</div>
                                <div id="info-box-details-area">
                                    <form id="info-box-form" onSubmit={handleSubmit(onSubmit)}>
                                        <div id="info-box-address-label-wrapper">
                                            <label id="info-box-address-label">Enter your Address :</label>
                                            <input
                                            type="text"
                                            placeholder="Enter your address"
                                            {...register("userAddress", {
                                                required: "Address is required",
                                                minLength: { value: 5, message: "Address min length should be 5" },
                                                maxLength: { value: 500, message: "Address should not exceed 500 characters" },
                                            })}
                                            />
                                        </div>
                                        {errors.userAddress && <div className="error-msg">{errors.userAddress.message}</div>}
                                        <br />
                                        <label>Enter your payment option:</label><br />
                                        <label>
                                            <input
                                            type="radio"
                                            value="cash"
                                            {...register("paymentMethod", { required: "Please select a payment method" })}
                                            /> Cash
                                        </label><br />
                                        <label>
                                            <input
                                            type="radio"
                                            value="Credit/Debit Card"
                                            {...register("paymentMethod", { required: "Please select a payment method" })}
                                            /> Credit/Debit Card
                                        </label><br />
                                        <label>
                                            <input
                                            type="radio"
                                            value="Netbanking"
                                            {...register("paymentMethod", { required: "Please select a payment method" })}
                                            /> Netbanking
                                        </label><br />
                                        <label>
                                            <input
                                            type="radio"
                                            value="UPI"
                                            {...register("paymentMethod", { required: "Please select a payment method" })}
                                            /> UPI
                                        </label><br />
                                        {errors.paymentMethod && <div className="error-msg">{errors.paymentMethod.message}</div>}
                                        <div id="info-box-place-order-btn-wrapper">
                                            <button id="info-box-place-order-btn" 
                                                type="submit" disabled={isSubmitting} 
                                            >
                                            Place Order
                                            </button>
                                        </div>
                                    </form>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}
export default Checkout