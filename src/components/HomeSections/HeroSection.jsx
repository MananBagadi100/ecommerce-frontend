import { Link, useNavigate } from 'react-router-dom'
import '../../styles/HomeStyles/HeroSectionStyles.css'
import Rolex from './../../assets/Rolex.png'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { getProductDetails } from '../../services/GetService'
const HeroSection = () => {
    const navigate = useNavigate()  
    const {addToCart} = useContext(cartContext)
    async function handleBuyNowBtn () {
        const response = await getProductDetails(98)
        addToCart(response.data)
    }
    return (
        <div className='hero-full-container'>
            <div className="hero-content-area">
                <div className="hero-text-area">
                    <div className="hero-text--title">
                        <div className="hero-text--title-line1">Where Elegance meets</div>
                        <div className="hero-text--title-line2">Perfection</div>
                        <div className="hero-text--description">Built for the deep , Admired on Land</div>
                    </div>
                    <div className="hero-call-for-action-btn">
                        <button className="hero-learn-more-btn" onClick={() => navigate(`/products/98`)}>Learn More</button>
                        <Link to='/cart' className="hero-buy-now-btn" onClick={handleBuyNowBtn}>Buy Now</Link>
                    </div>
                </div>
                <Link to='/products/98' className='hero-image-wrapper'>
                    <img src={Rolex} alt="Image not found" className='hero-image'/>
                </Link>
            </div>
        </div>
    )
}
export default HeroSection