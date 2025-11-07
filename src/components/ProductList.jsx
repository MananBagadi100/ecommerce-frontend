import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"
import '../styles/ProductListStyles.css'
//this componnet only prints products to screen
const ProductList = () => {
    const {filteredProducts} = useContext(ProductContext)
    return (
        <div className="products-grid">
            {
                filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id}/>
                ))
            }
        </div>
    )
}
export default ProductList