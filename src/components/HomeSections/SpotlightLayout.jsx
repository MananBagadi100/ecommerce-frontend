import { Link } from 'react-router-dom'
import './../../styles/HomeStyles/SpotlightLayoutStyles.css'
const SpotlightLayout = ({spotlightProduct , supportingProductTop , supportingProductBottom}) => {
    console.log('the spotlight product is ',spotlightProduct)
    return (
        <div className="spotlight-full-container">
            <div className="spotlight-left-product">
                <Link to={`/products/${spotlightProduct.id}`} className='spotlight-left-product-redirect-link'>
                    <img src={spotlightProduct.images[0]} alt="Image not found" className='spotlight-product-image'/>
                    <div className="spotlight-product-label">{spotlightProduct.title}</div>
                </Link>
            </div>
            <div className="spotlight-supporting-products">
                <div className="supporting-product-top">
                    <Link to={`/products/${supportingProductTop.id}`} className='supporting-product-redirect-link'>
                        <img src={supportingProductTop.images[0]} alt="Image not found" className="spotlight-supporting-product-top-image" />
                        <div className="spotlight-supporting-product-top-label">{supportingProductTop.title}</div>
                    </Link>
                </div>
                <div className="supporting-product-bottom">
                    <Link to={`/products/${supportingProductBottom.id}`} className='supporting-product-redirect-link'>
                        <img src={supportingProductBottom.images[0]} alt="Image not found" className="spotlight-supporting-product-bottom-image" />
                        <div className="spotlight-supporting-product-bottom-label">{supportingProductBottom.title}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SpotlightLayout