import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"

const PriceFilters = () => {
    const {priceRange,setPriceRange} = useContext(ProductContext)
    function updatePriceRange (index,e) {
        const temp = e.target.value         //storing the unchanged price 
        if (index === 0) {  //changing the lower price range
            setPriceRange([temp,priceRange[1]])
        }
        else {              //changing the upper price range 
            setPriceRange([priceRange[0],temp])
        }
    }
    console.log('The price range is ',priceRange)
    return (
        <div className="price-full-container">
            <div className="price-heading">Price Range</div>
            <div className="price-input-boxes" >
                <input
                    placeholder="Enter lower range"
                    value={priceRange[0]}
                    onChange={(e) => updatePriceRange(0,e)}
                />
                <br /><br />
                <input
                    placeholder="Enter upper range"
                    value={priceRange[1]}
                    onChange={(e) => updatePriceRange(1,e)}
                />
            </div>
        </div>
    )
}
export default PriceFilters