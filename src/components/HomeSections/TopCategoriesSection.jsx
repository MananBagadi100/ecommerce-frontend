import '../../styles/HomeStyles/TopCategoriesSectionStyles.css'
import Sunglasses from './../../assets/sunglassesT.png'
import Laptops from './../../assets/Laptops.png'
import Perfumes from './../../assets/Perfumes.png'
const TopCategoriesSection = () => {
    return (
        <div className='top-category-full-container'>
            <div className="top-category-title">Top Categories</div>
            <div className="top-category-content-area">
                <div className="top-category-card">
                    <img src={Perfumes} alt='Image not found'className="top-category-image"/>
                    <div className="top-category-image-label">Explore Perfumes</div>
                </div>
                <div className="top-category-card">
                    <img src={Sunglasses} alt='Image not found'className="top-category-image"/>
                    <div className="top-category-image-label">Try Sunglasses</div>
                </div>
                <div className="top-category-card">
                    <img src={Laptops} alt='Image not found'className="top-category-image"/>
                    <div className="top-category-image-label">Shop Laptops</div>
                </div>
            </div>
        </div>
    )
}
export default TopCategoriesSection