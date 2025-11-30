import './../../styles/HomeStyles/CustomerTestimonialsLayoutStyles.css'
import ProfilePic from './../../assets/ProfilePic1.png'
const CustomerTestimonialsLayout = () => {
    return (
        <div className='testimonials-layout-full-card'>
            <div className="testimonials-image-wrapper">
                <img src={ProfilePic} alt="Image not found" className="testimonials-user-profile-pic" />
            </div>
            <div className="testimonials-user-name-section">Boss</div>
            <div className="testimonials-user-review-section">There was very good food and the service was very good</div>
        </div>
    )
}
export default CustomerTestimonialsLayout