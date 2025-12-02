import '../styles/HomeStyles.css'
import HeroSection from "../components/HomeSections/HeroSection.jsx"
import TopCategoriesSection from "../components/HomeSections/TopCategoriesSection.jsx"
import TopProductsSection from "../components/HomeSections/TopProductsSection.jsx"
import CustomerTestimonialsSection from "../components/HomeSections/CustomerTestimonialsSection.jsx"
const Home= () => { 

    return (
        <div className="home-page-full-container">
            <HeroSection />
            <TopCategoriesSection />
            <TopProductsSection />
            <CustomerTestimonialsSection />
        </div>
        
    )
}
export default Home