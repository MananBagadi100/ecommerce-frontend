import { Link } from "react-router-dom"
import '../styles/HomeStyles.css'
import { useEffect, useState } from "react"
import { getFeaturedProducts } from "../services/GetService"
import heroImage from "../assets/heroImage.png"
import ProfileImg1 from '../assets/ProfileImg1.png'
import ProfileImg2 from '../assets/ProfileImg2.jpg'
import ProfileImg3 from '../assets/ProfileImg3.jpg'

import HeroSection from "../components/HomeSections/HeroSection.jsx"
import TopCategoriesSection from "../components/HomeSections/TopCategoriesSection.jsx"
const Home= () => { 

    return (
        <div className="home-page-full-container">
            <HeroSection />
            <TopCategoriesSection />
        </div>
        
    )
}
export default Home