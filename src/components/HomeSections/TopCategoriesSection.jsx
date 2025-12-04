import '../../styles/HomeStyles/TopCategoriesSectionStyles.css'
import SunglassesImg from './../../assets/sunglassesT.png'
import LaptopsImg from './../../assets/Laptops.png'
import PerfumesImg from './../../assets/Perfumes.png'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import * as motion from "motion/react-client"
import { ProductContext } from '../../context/ProductContext'
import { easeIn } from 'motion'
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
                    <motion.div 
                        initial={{opacity:0,y:30}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration:1,
                            delay:0.2,
                            ease:easeIn
                        }}
                        className="top-category-card">
                        <Link to="/products" className="top-category-card-link" onClick={() => handleTopCategorySelect("Fragrances","fragrances")}>
                            <img src={PerfumesImg} alt='Image not found'className="top-category-image"/>
                            <div className="top-category-image-label">Explore Perfumes</div>
                        </Link>
                    </motion.div>
                    
                    <motion.div 
                        initial={{opacity:0,y:30}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration: 1,
                            delay:0.4
                        }}
                        className="top-category-card">
                        <Link to="/products" className="top-category-card-link" onClick={() => handleTopCategorySelect("Sunglasses","sunglasses")}>
                            <img src={SunglassesImg} alt='Image not found'className="top-category-image"/>
                            <div className="top-category-image-label">Try Sunglasses</div>
                        </Link>
                    </motion.div>
                    
                    <motion.div 
                        initial={{opacity:0,y:30}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration: 1,
                            delay:0.6
                        }}
                        className="top-category-card">
                        <Link to="/products" className="top-category-card-link"onClick={() => handleTopCategorySelect("Laptops","laptops")}>
                            <img src={LaptopsImg} alt='Image not found'className="top-category-image"/>
                            <div className="top-category-image-label">Shop Laptops</div>
                        </Link>
                    </motion.div>
                </div>
        </div>
    )
}
export default TopCategoriesSection