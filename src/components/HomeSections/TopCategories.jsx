import '../../styles/HomeStyles/TopCategoriesStyles.css'
import Sunglasses from '../../assets/sunglasses.jpg'
import Laptop from '../../assets/LaptopCategory.jpg'
import Perfume from '../../assets/diorPink.jpg'
import { Link } from 'react-router-dom'
const TopCategories = () => {
    return (
        <div className="home-top-categories-main-div">
            <div id="home-top-categories-title">
                Top Categories
            </div>
            <div id="home-top-categories-options">
                
                <div className="home-top-category-card">
                    <Link to="/products?category=fragrances" className="Top-categories-link-wrapper">
                        <img className="home-category-image" src={Perfume} alt="Image not Found"/>
                        <div className="home-category-txt">Explore Perfumes</div>
                    </Link>
                </div>
                <div className="home-top-category-card">
                    <Link to="/products?category=sunglasses" className="Top-categories-link-wrapper">
                        <img className="home-category-image" src={Sunglasses} alt="Image not Found"/>
                        <div className="home-category-txt">Try Sunglasses</div>
                    </Link> 
                </div>
                <div className="home-top-category-card">
                    <Link to="/products?category=laptops" className="Top-categories-link-wrapper">
                        <img className="home-category-image" src={Laptop} alt="Image not Found"/>
                        <div className="home-category-txt">Shop Laptops</div>
                    </Link>
                </div>
            
            </div> 
        </div>
    )
}
export default TopCategories