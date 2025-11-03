import { Link } from 'react-router-dom'
import '../styles/ProductCardStyles.css'
const ProductCard = ({product}) => {
    return (
        <Link className="productCard-wrapper" key={product.id}>
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
                </div>
            </div>
        </Link>
    )
}
export default ProductCard