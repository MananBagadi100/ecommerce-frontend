import { Link } from 'react-router-dom'
import '../styles/ProductCardStyles.css'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
const ProductCard = ({product}) => {
    const {addToCart} = useContext(cartContext)
    return (
        <Link className="productCard-wrapper" key={product.id} to={`/products/${product.id}`}>
            <div className="productCard-container" key={product.id}>
                <div className="product-image-wrapper">
                    <img src={product.images[0]} className="product-image"/>
                </div>
                <div className="productCard-details">
                    <div className="product-id">{product.id}</div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">{product.rating}⭐</div>
                    <div className="product-brand">{product.brand}</div>
                    <button 
                        className="add-to-cart-btn" 
                        onClick={(e)=>{
                            e.preventDefault()
                            e.stopPropagation()
                            addToCart(product)
                            }}>Add to cart
                    </button>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard