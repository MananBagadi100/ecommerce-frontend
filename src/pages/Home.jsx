import { Link } from "react-router-dom"
import '../styles/HomeStyles.css'
import { useEffect, useState } from "react"
import { getFeaturedProducts } from "../services/GetService"
import FeaturedProducts from "../components/HomeSections/FeaturedProducts.jsx"
import TopCategories from "../components/HomeSections/TopCategories.jsx"
import heroImage from "../assets/heroImage.png"
import ProfileImg1 from '../assets/ProfileImg1.png'
import ProfileImg2 from '../assets/ProfileImg2.jpg'
import ProfileImg3 from '../assets/ProfileImg3.jpg'


const Home= () => { 
    const [featuredProducts , setFeaturedProducts] = useState([])
    const [featuredProductsLoading , setfeaturedProductsLoading ] = useState(true)
    //parent fetches the featuredProducts through API
    useEffect(() => {
        Promise.all(
            getFeaturedProducts(173,106,186)   //id's of the featured products 
        )
        .then(res => {
            setFeaturedProducts(res)
            setfeaturedProductsLoading(false)
        })
        .catch(error => console.log("The error is ",error)) 
    },[])

    return (
        <div id="home-full-container">
            <div id="home-content-area">
                <Link to='/products/98'>
                    <div id="hero-image-wrapper">
                        <img src={heroImage} id="hero-image" alt="Image Not Found"/>
                    </div>
                </Link>
                <TopCategories />
                <FeaturedProducts featuredProducts={featuredProducts} featuredProductsLoading={featuredProductsLoading}/>
                <div id="home-customer-testimonials-main-title">
                    Customer Testimonials
                </div>
                <div id="home-customer-testimonials-options">
                    <div className="home-customer-testimonials-wrapper">
                        <div className="home-customer-testimonials-heading">
                            <img src={ProfileImg1} alt='Not found' className="home-customer-profile-pic"/>
                            <div className="home-customer-testimonial-name">Abhishek Banerjee</div>
                        </div>
                        <div className="home-customer-testimonials-review">
                            Lightning-fast site, clean navigation, and checkout took under a minute. Loved the live order tracking.
                        </div>
                    </div>
                    <div className="home-customer-testimonials-wrapper">
                        <div className="home-customer-testimonials-heading">
                            <img src={ProfileImg2} alt='Not found' className="home-customer-profile-pic"/>
                            <div className="home-customer-testimonial-name">Aarav Mehta</div>
                        </div>
                        <div className="home-customer-testimonials-review">
                            Great filters and search—found what I needed in two clicks. UPI payment was smooth and instant.
                        </div>
                    </div>
                    <div className="home-customer-testimonials-wrapper">
                        <div className="home-customer-testimonials-heading">
                            <img src={ProfileImg3} alt='Not found' className="home-customer-profile-pic"/>
                            <div className="home-customer-testimonial-name">Sara D'Souza</div>
                        </div>
                        <div className="home-customer-testimonials-review">
                            Mobile experience is superb. Clear return policy, proactive updates, and support replied in 5 minutes.
                        </div>
                    </div>
                </div>
                <div id="home-contact-section">
                    <div id="contact-section-wrapper">Any Questions ? Contact us at 
                        <Link to='/contact-us'> example@gmail.com</Link>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
export default Home