import '../../styles/HomeStyles/TopCategoriesSectionStyles.css'
import SunglassesImg from './../../assets/sunglassesT.png'
import LaptopsImg from './../../assets/Laptops.png'
import PerfumesImg from './../../assets/Perfumes.png'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
const TopCategoriesSection = () => {
    const {resetFilters,setSelectedCategories} = useContext(ProductContext)
    function handleTopCategorySelect (categoryName,categorySlug) {   //category slug should be exactly matching to the given category name of the product by the API
        resetFilters()      //resets all current filters
        console.log('HERE!')
        setSelectedCategories([{name: categoryName ,slug: categorySlug}])

    }
    return (
        <div className='top-category-full-container'>
            <div className="top-category-title">Top Categories</div>
                <div className="top-category-content-area">
                    <div className="top-category-card">
                        <Link to="/products" className="top-category-card-link" onClick={() => handleTopCategorySelect("Fragrances","fragrances")}>
                            <img src={PerfumesImg} alt='Image not found'className="top-category-image"/>
                            <div className="top-category-image-label">Explore Perfumes</div>
                        </Link>
                    </div>
                    
                    <div className="top-category-card">
                        <Link to="/products" className="top-category-card-link" onClick={() => handleTopCategorySelect("Sunglasses","sunglasses")}>
                            <img src={SunglassesImg} alt='Image not found'className="top-category-image"/>
                            <div className="top-category-image-label">Try Sunglasses</div>
                        </Link>
                    </div>
                    
                    <div className="top-category-card">
                        <Link to="/products" className="top-category-card-link"onClick={() => handleTopCategorySelect("Laptops","laptops")}>
                            <img src={LaptopsImg} alt='Image not found'className="top-category-image"/>
                            <div className="top-category-image-label">Shop Laptops</div>
                        </Link>
                    </div>
                </div>
        </div>
    )
}
export default TopCategoriesSection