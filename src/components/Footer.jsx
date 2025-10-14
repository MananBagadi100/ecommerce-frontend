import '../styles/FooterStyles.css'
import CopyRightImg1 from '../assets/CopyRightImg1.jpg'
const Footer = () => {
    return (
        <div id='footer-full-container'>
            <div id='footer-content-wrapper'>
                <img src={CopyRightImg1} alt="Not found" id="footer-copyright-img" />
                <div id="footer-copyright-txt">XYZ e-comm Pvt Ltd</div>
            </div>      
        </div>
    )    
}
export default Footer