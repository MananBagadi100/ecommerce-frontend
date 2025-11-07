import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"

const ProductSorting = () => {
    const {sorting,setSorting} = useContext(ProductContext)
    return (
        <div className="sorting-full-container">
            <div className="sorting-products-heading" style={{fontWeight:'bold'}}>Sorting</div>
            <div className="sorting-list-options">
                <input
                    type="radio"
                    value="price_low_high"
                    checked={sorting === "price_low_high"}
                    onChange={(e) => setSorting(e.target.value)}
                />
                <label>Price : Low to High</label>
                <br />
                <input
                    type="radio"
                    value="price_high_low"
                    checked={sorting === "price_high_low"}
                    onChange={(e) => setSorting(e.target.value)}
                />
                <label>Price : High to Low</label>
                <br />
                <input
                    type="radio"
                    value="rating_high_low"
                    checked={sorting === "rating_high_low"}
                    onChange={(e) => setSorting(e.target.value)}
                />
                <label>Rating : High to Low</label>
                <br />
                <input
                    type="radio"
                    value="rating_low_high"
                    checked={sorting === "rating_low_high"}
                    onChange={(e) => setSorting(e.target.value)}
                />
                <label>Price : Low to High</label>
                <br />
                <input 
                    type="radio"
                    value=""
                    checked={sorting === ""}
                    onChange={(e) => setSorting(e.target.value)}
                />
                <label>No Sorting</label>
            </div>
        </div>
    )
}
export default ProductSorting