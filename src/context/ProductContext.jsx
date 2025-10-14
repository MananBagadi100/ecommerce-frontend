import { createContext, useEffect, useState } from "react";
import Products from "../pages/Products";
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    const [minRating , setMinRating] = useState(null)   //for rating filter     
    const [sort , setSort] = useState('')
    function SortProducts (productsArray) {
        const arr = [...productsArray]
        switch(sort) {
            case 'price_asc' : return arr.sort((a,b) => a.price - b.price)
            case 'price_desc' : return arr.sort((a,b) => b.price - a.price)
            case 'rating_asc' : return arr.sort((a,b) => a.rating - b.rating)
            case 'rating_desc' : return arr.sort((a,b) => b.rating - a.rating)
            default : return arr
        }
    }
    return (
        <ProductContext.Provider value={{minRating , setMinRating , sort , setSort , SortProducts}}>
            {children}
        </ProductContext.Provider>
    )
}
