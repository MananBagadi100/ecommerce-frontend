import './../../styles/HomeStyles/SpotlightLayoutStyles.css'
const SpotlightLayout = ({spotlightProduct , supportingProductTop , supportingProductBottom}) => {
    return (
        <div className="spotlight-full-container">
            <div className="spotlight-left-product">
                <img src={spotlightProduct.images[0]} alt="Image not found" className='spotlight-product-image'/>
                <div className="spotlight-product-label">{spotlightProduct.title}</div>
            </div>
            <div className="spotlight-supporting-products">
                <div className="supporting-product-top">
                    <img src={supportingProductTop.images[0]} alt="Image not found" className="spotlight-supporting-product-top-image" />
                    <div className="spotlight-supporting-product-top-label">{supportingProductTop.title}</div>
                </div>
                <div className="supporting-product-bottom">
                    <img src={supportingProductBottom.images[0]} alt="Image not found" className="spotlight-supporting-product-bottom-image" />
                    <div className="spotlight-supporting-product-bottom-label">{supportingProductBottom.title}</div>
                </div>
            </div>
        </div>
    )
}
export default SpotlightLayout