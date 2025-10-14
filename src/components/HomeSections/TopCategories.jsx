import '../../styles/HomeStyles/TopCategoriesStyles.css'
import LaptopCat from '../../assets/Laptop_demo.jpg'
import PerfumeCat from '../../assets/Dior_demo.jpg'
import F1 from '../../assets/F1.png'
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
                        <img className="home-category-image" src={PerfumeCat} alt="Image not Found"/>
                        <div className="home-category-txt">Explore Perfumes</div>
                    </Link>
                </div>
                <div className="home-top-category-card">
                    <Link to="/products?category=sunglasses" className="Top-categories-link-wrapper">
                        <img className="home-category-image" src={F1} alt="Image not Found"/>
                        <div className="home-category-txt">Try Sunglasses</div>
                    </Link> 
                </div>
                <div className="home-top-category-card">
                    <Link to="/products?category=laptops" className="Top-categories-link-wrapper">
                        <img className="home-category-image" src={LaptopCat} alt="Image not Found"/>
                        <div className="home-category-txt">Shop Laptops</div>
                    </Link>
                </div>
            
            </div> 
        </div>
    )
}
export default TopCategories