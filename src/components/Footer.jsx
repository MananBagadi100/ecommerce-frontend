import '../styles/FooterStyles.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <div className="footer-full-container">
            <div className="footer-content-wrapper">
                <div className="footer-copyright-icon">
                    <CopyrightIcon sx={{ color: 'white', fontSize: 18 }} />
                </div>
                <div className="footer-copyright-txt">
                    XYZ e-comm Pvt Ltd
                </div>
            </div>
        </div>
    )
}

export default Footer