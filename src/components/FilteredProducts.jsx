import { Link } from "react-router-dom"
import { cartContext } from "../context/CartContext"
import { useContext, useEffect } from "react"
import '../styles/AllProductsStyles.css'
import { ProductContext } from "../context/ProductContext"
const FilteredProducts = ({categoryProducts , selectedMinPrice ,selectedMaxPrice ,rangeError, searchText}) => {
    const cartHandler = useContext(cartContext)
    const {minRating , SortProducts} = useContext(ProductContext)
    console.log("the category products is ",categoryProducts)
    //visibleProducts just contains all the products based on the condition
    const visibleProducts = categoryProducts.map((item) => (
        item.data.products.filter((prod) => (
            (minRating === null || prod.rating >= minRating) && prod.title.toLowerCase().includes(searchText.toLowerCase())
        ))
    ))
    //visible products is an array of 'array of products'
    const visibleProductsFinal = rangeError !== '' ?    
        visibleProducts :
        visibleProducts.map((item) => (
            item.filter((prod) => (
                selectedMinPrice <= prod.price && prod.price <= selectedMaxPrice
            ))
        ))
        console.log("the flat visibleProductsFinal is ", visibleProductsFinal.flat())
    const sortedVisibleProductsFinal = SortProducts(visibleProductsFinal.flat())
    
    
    if(sortedVisibleProductsFinal) {
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
    else {
        <div>No Products!</div>
    }
}
export default FilteredProducts
