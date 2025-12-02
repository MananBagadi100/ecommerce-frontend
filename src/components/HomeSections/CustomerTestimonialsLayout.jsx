import './../../styles/HomeStyles/CustomerTestimonialsLayoutStyles.css'
import ProfilePic from './../../assets/ProfilePic1.png'
const CustomerTestimonialsLayout = ({customer}) => {
    return (
        <div className='testimonials-layout-full-card'>
            <div className="testimonials-image-wrapper">
                <img src={customer.profile_photo} alt="Image not found" className="testimonials-user-profile-pic" />
            </div>
            <div className="testimonials-user-name-section">{customer.name}</div>
            <div className="testimonials-user-review-section">{customer.review}</div>
        </div>
    )
}
export default CustomerTestimonialsLayout