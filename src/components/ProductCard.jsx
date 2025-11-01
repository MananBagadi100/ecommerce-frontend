import { Link } from 'react-router-dom'
import '../styles/ProductCardStyles.css'
const ProductCard = ({product}) => {
    return (
        <Link className="productCard-wrapper">
            <div className="productCard-container" key={product.id}>
                <img src={product.images[0]} className="productCard-image"/>
                <div className="productCard-details">
                    <div className="productId">{product.id}</div>
                    <div className="productName">{product.title}</div>
                    <div className="productPrice">{product.price}</div>
                    <div className="productRating">{product.rating}</div>
                    <div className="productBrand">{product.brand}</div>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard