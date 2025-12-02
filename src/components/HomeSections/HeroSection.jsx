import { Link } from 'react-router-dom'
import '../../styles/HomeStyles/HeroSectionStyles.css'
import Rolex from './../../assets/Rolex.png'
const HeroSection = () => {
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
                        <button className="hero-learn-more-btn">Learn More</button>
                        <button className="hero-buy-now-btn">Buy Now</button>
                    </div>
                </div>
                <Link to='/products' className='hero-image-wrapper'>
                    <img src={Rolex} alt="Image not found" className='hero-image'/>
                </Link>
            </div>
        </div>
    )
}
export default HeroSection