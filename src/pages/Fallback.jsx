import  '../styles/FallbackStyles.css'
import cautionImg from '../assets/cautionImg.jpg'
const Fallback = () => {
    return (
        <div id="full-container">
            <div id="wrapper-div">
                <div id="error-div">404 Error </div>
                <div id="message-div">Page not found !</div>
                <img id="caution-img" src={cautionImg} alt='Image not found'/>
            </div>
        </div>
    )
}
export default Fallback