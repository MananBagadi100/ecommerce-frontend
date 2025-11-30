import { Link } from "react-router-dom"
import '../styles/HomeStyles.css'
import { useEffect, useState } from "react"
import heroImage from "../assets/heroImage.png"
import ProfileImg1 from '../assets/ProfileImg1.png'
import ProfileImg2 from '../assets/ProfileImg2.jpg'
import ProfileImg3 from '../assets/ProfileImg3.jpg'

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