import { getOutOfStockProducts } from '../services/GetService'
import { useEffect,useState } from 'react'
const OutofStock= () => {
    // const temp= <outOfStockProducts />
    const [outProducts,setOutProducts] = useState([])
    useEffect(() => {
        getOutOfStockProducts()
            .then(response => {
                console.log('this is out of stock',outProducts)
                console.log('thsi is out of stock response',response)
                setOutProducts(response.data)
                
            })
    },[])

    return (
        <div>
            <h3 className='product-headings'>Out of Stock Products</h3>
            <div className="product-grid">
                {
                    outProducts.products && outProducts.products.map(item => (
                        <div key={item.id} className="product-card">
                            <img src={item.images[0]} alt="Image not given" />
                            <div>ID : {item.id}</div>
                            <div>Title : {item.title}</div>
                            <div>Price : {item.price}</div>
                            <div>Rating : {item.rating}</div>
                            <div>Brand : {item.brand}</div>
                        </div>
                    ))  
                }
            </div>
        </div>
    )
}
export default OutofStock