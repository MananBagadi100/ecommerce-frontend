import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { LoginProvider } from './context/LoginContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <CartProvider>
        <ProductProvider>
            <App />
        </ProductProvider>
      </CartProvider>
    </LoginProvider>
  </StrictMode>,
)
