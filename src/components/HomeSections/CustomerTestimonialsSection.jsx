import './../../styles/HomeStyles/CustomerTestimonialsSectionStyles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerTestimonialsData from './CustomerTestimonialsData.json'
import CustomerTestimonialsLayout from './CustomerTestimonialsLayout';
const CustomerTestimonialsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        centerMode : true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive : [
            {
                breakpoint : 734,
                settings : {
                    slidesToShow : 1
                }
            },
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : 2
                }
            }
        ]
    };
    return (
        <div className="customer-review-full-container">
            <div className="customer-review-title">Customer Testimonials</div>
            <div className="customer-review-content-area">
                <div className="customer-review-slider-area">
                    <Slider {...settings}>
                        {
                            CustomerTestimonialsData.map((customer) => (
                                <CustomerTestimonialsLayout customer={customer}/>
                            ))
                        }
                    </Slider>  
                </div>      
            </div>
        </div>
    )
}
export default CustomerTestimonialsSection