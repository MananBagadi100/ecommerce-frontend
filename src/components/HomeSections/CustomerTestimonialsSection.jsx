import './../../styles/HomeStyles/CustomerTestimonialsSectionStyles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerTestimonialsLayout from './CustomerTestimonialsLayout';
const CustomerTestimonialsSection = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <div className="customer-review-full-container">
            <div className="customer-review-title">Customer Testimonials</div>
            <div className="customer-review-content-area">
                <Slider {...settings}>
                    <CustomerTestimonialsLayout />
                    <CustomerTestimonialsLayout />
                </Slider>       
            </div>
        </div>
    )
}
export default CustomerTestimonialsSection