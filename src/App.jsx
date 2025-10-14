import './styles/App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Products from './pages/Products.jsx'
import OutofStock from './components/OutofStock'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails.jsx'
import Checkout from './components/Checkout.jsx'
import Fallback from './pages/Fallback.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { LoginContext } from './context/LoginContext.jsx'

function App() {
  const {setLoginState} = useContext(LoginContext)
  const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE;
  useEffect(() => {
    const checkAuth = async () => {
      const answer = await axios.post(`${backendRouteURL}/api/auth/verify`,{},{withCredentials:true})
      try {
        if(answer.data.isLoggedIn) {  //if true
          setLoginState(true)
        }
      }
      catch (error) {
        console.log("Some error occured",error)
      } 
    }
    checkAuth()
  },[])
	
	
  return (
    <div className='all-pages-container'>
        <BrowserRouter>
            <Navbar />
            <main className='page-contents'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:product_id' element={<ProductDetails />} />
                    <Route path='/products/out-of-stock' element={<OutofStock />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/register' element={<Register />} />

                    <Route path='/*' element={<Fallback />} />  
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>    
    </div>
  )
}
export default App
