import { useContext, useEffect, useRef, useState } from "react";
import { getAllTheCategoryItems } from '../services/GetService';
import AllProducts from './AllProducts';
import FilteredProducts from './FilteredProducts';
//this file just brings all the different components here for rendering , nothing else !
const RenderProducts = ({productInfo , filterProductsArray , selectedMinPrice , selectedMaxPrice , rangeError , searchText }) => {
    const [categoryProducts , setCategoryProducts] = useState([])
    useEffect(() => {
        if(filterProductsArray.length===0) {
            setCategoryProducts([])
            return
        }
        //gets all the products for each product category in filterProductsArray
        Promise.all(
            filterProductsArray.map(item => 
                getAllTheCategoryItems(item.url)
            )
        )
        //then after promise resolves it sets the array of responses to the cartegoryProducts 
        .then(setCategoryProducts)  
        .catch(error => console.log("fetch failed ", error))
    },[filterProductsArray])
    const [searchInput, setSearchInput] = useState('');
    return (
        <>
            <div style={{width:'60%',margin:'4px auto',maxWidth:'1050px'}}>
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                    style={{marginBottom: '10px', padding: '5px', width: '100%'}}
                />
            </div>
            {filterProductsArray.length === 0 ? (
                <AllProducts 
                    productInfo={productInfo} 
                    selectedMinPrice={selectedMinPrice} 
                    selectedMaxPrice={selectedMaxPrice}
                    rangeError={rangeError}
                    searchText={searchInput}
                />
            ) : (
                <FilteredProducts 
                    categoryProducts={categoryProducts}  
                    selectedMinPrice={selectedMinPrice} 
                    selectedMaxPrice={selectedMaxPrice}
                    rangeError={rangeError}
                    searchText={searchInput}
                />
            )}
        </>
    )
}
export default RenderProducts
//If filterProductsArray changes-> categoryProducts changes->Child re renders 