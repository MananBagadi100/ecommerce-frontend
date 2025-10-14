import { useContext } from 'react'
import '../styles/AllProductsStyles.css'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
const AllProducts = ({productInfo , selectedMinPrice , selectedMaxPrice , rangeError, searchText }) => {
    const cartHandler=useContext(cartContext)
    const {minRating , SortProducts} = useContext(ProductContext)
    //const productValue = useContext(ProductContext)
    const visibleProducts = productInfo.products.filter ((item) => (
        (minRating === null || item.rating >= minRating) && item.title.toLowerCase().includes(searchText.toLowerCase())
    ))
    const visibleProductsFinal = rangeError !== '' ?
        visibleProducts :   //no filtering
        visibleProducts.filter((prod) => (
            selectedMinPrice <= prod.price && prod.price <= selectedMaxPrice
        ))
    const sortedVisibleProductsFinal = SortProducts(visibleProductsFinal)
    return (
        <div className="product-grid">
            {    
                sortedVisibleProductsFinal && sortedVisibleProductsFinal.map((item) => (
                    <Link key={item.id} to={`/products/${item.id}`} className="product-card-wrapper">
                        <div key={item.id} className="product-card">
                            <img src={item.images[0]} alt="Image not given" />
                                <div className="product-id">ID : {item.id}</div>
                                <div className="product-title">{item.title}</div>
                                <div className="product-price">Price : {item.price}</div>
                                <div className="product-rating">Rating : {item.rating}</div>
                                <div className="product-brand">Brand : {item.brand}</div>
                                <button 
                                    className="cart-btn" 
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        e.stopPropagation()
                                        cartHandler.addToCart(item)
                                        }}>Add to cart
                                </button>
                        </div>
                    </Link>
                ))
            }  
        </div> 
    )
}

export default AllProducts