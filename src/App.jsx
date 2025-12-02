import './styles/App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Products from './pages/Products.jsx'
import Navbar from './components/Navbar'
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
//hello refactor
function App() {
  const {setLoginState} = useContext(LoginContext)
  const backendRouteURL = import.meta.env.VITE_BACKEND_ROUTE;
  useEffect(() => {
    const checkAuth = async () => {
      
      try {
        const answer = await axios.post(`${backendRouteURL}/api/authCheck`,{},{withCredentials:true})
        if(answer.data.isLoggedIn) {  //if token is correct
          setLoginState(true)
        }
        else {
          setLoginState(false)  //if new user or token has been tampered
        }
      }
      catch (error) {
        if (error.response) {
          console.log("Backend responded with error:", {
            status: error.response.status,
            data: error.response.data,
          });
        } 
        else if (error.request) {
          console.log("No response received from backend:", error.request);
        } 
        else {
          console.log("Error setting up request:", error.message);
        }
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
