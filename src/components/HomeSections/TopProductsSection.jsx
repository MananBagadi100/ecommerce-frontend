import { useEffect, useState } from 'react'
import { getFeaturedProducts } from '../../services/GetService'
import './../../styles/HomeStyles/TopProductsSectionStyles.css'
import SpotlightLayout from './SpotlightLayout.jsx'
const TopProductsSection = () => {
    const [topProducts , setTopProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await Promise.all(getFeaturedProducts(1,2,3,5,6,7))  //getting all top prouducts
            setTopProducts(response.map(res => res.data))   //putting all the products data in state
        }
        fetchData()
    },[])
    console.log(topProducts)  
    return (
        <div className='top-products-full-container'>
            <div className="top-products-title">Top Products</div>
            <div className="top-products-content-area">
                <div className="top-products-section">
                    <SpotlightLayout 
                        spotlightProduct={topProducts[0]}
                        supportingProductTop={topProducts[1]}
                        supportingProductBottom={topProducts[2]}
                    />
                </div>
                <div className="top-products-section">
                    {/* <SpotlightLayout /> */}
                </div>
                
            </div>
        </div>
    )
}
export default TopProductsSection