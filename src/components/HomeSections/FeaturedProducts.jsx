import '../../styles/HomeStyles/FeaturedProductsStyles.css'
import { getFeaturedProducts } from '../../services/GetService'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const FeaturedProducts = ({featuredProducts , featuredProductsLoading}) => {
    if(featuredProductsLoading) {
        return (
            <div className="home-featured-product-main-div">
                <Box
                    sx={{
                        display: 'flex',            //this loader is only for this div
                        justifyContent: 'center',   // center horizontally
                        alignItems: 'center',       // center vertically
                        height: '100%'             // full height of the parent div
                    }}>
                    <CircularProgress 
                        size="50px"
                        sx={{color: 'var(--loading-animation-color)'}}    
                    />
                </Box>
            </div>
        )
    }
    else {
        return (
            <div className="home-featured-product-main-div">
                <div id="home-featured-product-main-title">
                    Featured Products
                </div>
                <div id="home-featured-options">
                    {
                        featuredProducts.map((item) => (
                            <div className="home-featured-product-card" key={item.data.id}>
                                <Link to={`/products/${item.data.id}`} className="boss-best">
                                    <img src={item.data.images[0]} alt="Image not found" className="home-featured-image" />
                                    <div className="home-featured-product-details" >
                                        <div className="home-featured-product-title">{item.data.title}</div>
                                        <div className="home-featured-product-price">$ {item.data.price}</div>
                                        <div className="home-featured-product-rating">{item.data.rating} ⭐️</div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    
}
export default FeaturedProducts
        