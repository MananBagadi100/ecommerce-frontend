import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../services/GetService";
import { useContext, useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/ProductDetailsStyles.css'
import { cartContext } from "../context/CartContext";
const ProductDetails = () => {
    const value=useContext(cartContext)
    const navigate = useNavigate()
    const [ productQuantity, setProductQuantity ] = useState(1) //quantity of the selected product
    const [ product_details ,setProductDetails]= useState(null) //state to store product details
    const params = useParams()
    const prod_id = params.product_id
    const {cart,addManyProductsToCart} = useContext(cartContext)
    // Buy Now button functionality
    function handleBuyNowBtn (product,qty) {   
        const exists = cart.find((item) => item.id === product.id)
        if (!exists) {  //If product does not exist in the cart yet
            addManyProductsToCart(product,qty)
        }
        navigate('/cart')   // Navigate to the cart immediately
    }
    
    function convertFirstCharToUpperCase(str) {
        let updatedString = ''
        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                updatedString = updatedString + str[i].toUpperCase()
            }
            else {
                updatedString = updatedString + str[i]
            }
        }
        return updatedString
    }
    //For formatting dates into readable format
    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
        }
    useEffect (() => {
        const fetchData = async() => {
            try {
                const res = await getProductDetails(prod_id)
                setProductDetails(res.data)
                console.log('DEBUG Called api request again !')
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()     //calling the function
    },[prod_id])
    console.log("DEBUG :",product_details)
    console.log("DEBUG ",productQuantity)
    console.log('DEBUG the product id is ',prod_id)

    return (
        <div className="full-product-details-page">
            {
                !product_details ? (
                    <Box sx={{ display: 'flex' , alignItems: "center", justifyContent:'center',width:'100%',height:'100%',size:'40px'}}>
                        <CircularProgress />
                    </Box>
                ) :
            (
                <div className="product-details-content-area">
                    <div className="product-breadcrums">
                        Home &gt; Products &gt; {convertFirstCharToUpperCase(product_details.category)}
                    </div>
                    <div className="product-details-image-wrapper">
                        <img src={`${product_details.images[0]}`} alt="Image not Found" className="product-details-image" />
                    </div>
                    <div className="product-details-information-area">
                        <div className="product-details-main-information">
                            <div className="product-details-info-id">
                                Id :{product_details.id}
                            </div>
                            <div className="product-details-info-title">
                                {product_details.title}
                            </div>
                            <div className="product-details-info-category">
                                <span className="product-details-info-name">Category :</span>
                                {convertFirstCharToUpperCase(product_details.category)}
                            </div>
                            <div className="product-details-info-price">
                                ${product_details.price}
                            </div>
                            <div className="product-details-info-price-support">Inclusive of all taxes
                            </div>
                        </div>

                        <div className="product-details-extra-info-wrapper">
                            <div className="product-details-extra-info-title">
                                More Info
                            </div>
                            <div className="product-details-info-warranty">
                                <span className="product-details-info-name">Warranty :</span>
                                {product_details.warrantyInformation}
                            </div>
                            <div className="product-details-info-shipping">
                                <span className="product-details-info-name">Shipping :</span>
                                {product_details.shippingInformation}
                            </div>
                            <div className="product-details-info-availability">
                                <span className="product-details-info-name">Availability :</span>
                                {product_details.availabilityStatus}
                            </div>
                            <div className="product-details-info-description">
                                <span className="product-details-info-name">Description :</span>
                                {product_details.description}
                            </div>
                            <div className="product-details-info-return-policy">
                                <span className="product-details-info-name">Return Policy :</span>
                                {product_details.returnPolicy}
                            </div>
                        </div>

                    </div>
                    <div className="product-details-quantity-updator-wrapper">
                         {/* Decrement product quantity and prevent it from going to zero */}
                        <button 
                            className="product-details-quantity-updator-btn"        
                            onClick={() => productQuantity !== 1 ?  setProductQuantity((prev) => prev - 1) : ''}   
                        >        
                            -
                        </button>
                        <div className="product-details-quantity-selected" style={{fontSize:18}}>{productQuantity}</div>
                        <button 
                            className="product-details-quantity-updator-btn" 
                            onClick={() => setProductQuantity((prev) => prev + 1)}>
                                +
                        </button>
                    </div>
                    <div className="product-details-info-btn-wrapper">
                        <button 
                            className="product-details-info-addToCart-btn" 
                            onClick={() => addManyProductsToCart(product_details,productQuantity)}
                        >            {/* onClick={value.addManyProductsToCart( product_details ,product_quantity)}*/}
                            Add To Cart
                        </button>
                        <button 
                            className="product-details-info-buyNow-btn" 
                            onClick={() => handleBuyNowBtn(product_details,productQuantity)}
                        > {/* onClick={handleBuyNowBtn(product_details) */ }
                            Buy Now
                        </button>
                    </div>

                    
                    <div className="product-details-reviews-wrapper">
                        <div className="product-details-reviews-title">Reviews</div>
                        {
                            product_details.reviews.map((review) => (
                                <div className="product-details-review-info" key={`${review.reviewerName}-${review.reviewerEmail}-${review.rating}-${review.comment}`}>
                                    <div className="product-details-reviewerName">{review.reviewerName}</div>
                                    <div className="product-details-reviewerEmail">{review.reviewerEmail}</div>
                                    <div className="product-details-review-rating">{review.rating} ⭐️</div>
                                    <div className="product-details-review-comment">{review.comment}</div>
                                    <div className="product-details-date">{formatDate(review.date)}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            )}
        </div>

        
    )
}
export default ProductDetails