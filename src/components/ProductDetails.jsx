import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../services/GetService";
import { useContext, useEffect, useState } from "react";
import '../styles/ProDetailsStyles.css'
import { cartContext } from "../context/CartContext";
const ProductDetails = () => {
    const value=useContext(cartContext)
    const [ product_quantity, setProductQuantity ] = useState(1)
    const [ product_details ,setProductDetails]= useState(null)
    const navigate = useNavigate()
    const params = useParams()
    const prod_id = params.product_id
    function handleBuyNowBtn (item) {
        value.addToCart(item)
        navigate('/cart')
    }
    useEffect (() => {
        const fetchData = async() => {
            try {
                const res = await getProductDetails(prod_id)
                setProductDetails(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()     //calling the function
    },[prod_id])
    console.log("DEBUG :",product_details)
    return (
        <div className="full-product-details-page">
            {
                !product_details ? (<p>Loading ...</p>) :
            (
            <div className="product-details-content-area">
                <div className="product-breadcrum">
                    <div className="breadcrum-inner">Home &gt; Products &gt; {product_details.tags[0]} </div>
                </div>
                <div className="product-wrapper">
                    <div className="product-details-image">
                        <img src={product_details.images[0]} alt="Image not found" />
                    </div> 
                    <div className="product-content-wrapper">
                        <div className="product-content-details">
                            <div id="prod-details-id">Id : {product_details.id}</div>
                            <div id="prod-details-title">{product_details.title}</div>
                            <div id="prod-details-category">Category : {product_details.category}</div>
                            <div id="prod-details-price">Price : ${product_details.price}</div>
                            <div id="prod-details-price-contd">Inclusive of all taxes</div>
                            <div id="prod-details-rating">
                                Ratings : 
                                <span> {product_details.rating} ⭐️</span>
                            </div>
                            <div id="prod-details-warranty">
                                Warranty Information : 
                                <span> {product_details.warrantyInformation}</span>
                            </div>
                            <div id="prod-details-shipInfo">Shipping Information : {product_details.shippingInformation}</div>
                            <div id="prod-details-status">Availability Status : {product_details.availabilityStatus}</div>
                            <div id="prod-details-desc">Description : {product_details.description}</div>
                            <div id="prod-details-returnPolicy"> {product_details.returnPolicy}</div>
                            <div className="product-page-btn">
                                <div className="quantity-selector">
                                    <button className="quantity-btn" onClick={() => {setProductQuantity(qty => Math.max(1,qty-1))}}>-</button>
                                        {product_quantity}
                                    <button className="quantity-btn" onClick={() => {setProductQuantity(qty => qty+1)}}>+</button>
                                </div>
                                <div className="product-details-order-btn-wrapper">
                                    <button className="product-details-order-btn" onClick={() => {value.addManyProductsToCart( product_details ,product_quantity)}}>Add to cart</button>
                                    <button className="product-details-order-btn" onClick={() => handleBuyNowBtn(product_details)}>Buy now</button>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
                <div className="prod-details-extraInfo">
                    <div id="prod-details-review-heading">Reviews </div>
                    <div className="prod-details-all-reviews">
                        {
                            product_details.reviews.map((eachReview) => (
                                <div className="prod-details-review" key={`${eachReview.reviewerName}-${eachReview.rating}-${eachReview.date}`}>
                                    <div className="prod-details-reviewer">{eachReview.reviewerName}</div>
                                    <div className="prod-details-rating">Rating : {eachReview.rating} ⭐️</div>
                                    <div className="prod-details-comment">{eachReview.comment}</div>
                                    <div className="prod-details-date">{new Date(eachReview.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            )}
        </div>

        
    )
}
export default ProductDetails