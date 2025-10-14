import { useContext } from "react"
import '../styles/CartStyle.css'
import { cartContext } from "../context/CartContext"    //portal name
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
import emptyCartImage2 from "../assets/emptyCart.png"
import DeleteIcon from '@mui/icons-material/Delete'
import axios from "axios"
const Cart = () => {
    const navigate = useNavigate()
    const value=useContext(cartContext)
    const {loginState, setLoginState} = useContext(LoginContext)
    const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE
    const handleCheckout = async() => {
        try {
            const answer = await axios.post(`${backendRouteURL}/api/auth`,{},{withCredentials:true})
            console.log('answer in cart is ',answer)
            loginState ? navigate('/checkout') : navigate('/login')
        }
        catch (error) {
            console.log("Something wrong in axios cart api request")
        }
    }
    if(value.cart.length===0) {
        return (
            <div className="cart-empty-wrapper">
                <div className="cart-empty-text">Hey cart is empty!</div>
                <img className="cart-empty-image" src={emptyCartImage2} alt="Image not found"/>
            </div>
        )
    }
    else {
        return (
            <div className="cart-full-page-container">
                <div className="cart-content-area">
                    <div className="cart-main-title">Cart</div>
                    <div className="cart-main-content">
                        <div className="cart-items-list">
                            {
                                value.cart.map((cartItem) => (
                                    <div key={cartItem.id} className="cart-card">
                                        <img className="cart-image" src={cartItem.image} alt="Image not found" />
                                        <div className="cart-info">
                                            <span className="cart-id">ID : {cartItem.id}</span>
                                            <span className="cart-title">{cartItem.title}</span>
                                            <span className="cart-price">Price : {cartItem.price}</span>
                                            <span className="cart-qty">
                                                Quantity : 
                                                <button className="qty-btn" onClick={()=> {value.removeFromCart(cartItem.id)}}>-</button> 
                                                    {cartItem.quantity} 
                                                <button className="qty-btn" onClick={()=> {value.addToCart(cartItem)}}>+</button>
                                            </span>
                                        </div>
                                        <div className="product-removal-btn">
                                            <button onClick={() =>{value.deleteFromCart(cartItem.id)}}><DeleteIcon sx={{fontSize: 18 }}/></button>
                                        </div>
                                    </div>
                                )) 
                            }
                        </div>
                        <div className="cart-total-wrapper">
                            <div id="cart-total-value">Total : {value.calculateTotal(value.cart)}</div>
                        </div>
                        <div className="checkout-wrapper">
                            <button id="cart-checkout-btn" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart