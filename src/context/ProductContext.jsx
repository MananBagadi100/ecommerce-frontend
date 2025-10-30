import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    
    const [allProducts , setAllProducts] = useState([])
    const [searchText , setSearchText] = useState('')
    const [selectedCategories , setSelectedCategories] = useState([])
    const [minRating , setMinRating] = useState(null) 
    const [priceRange , setPriceRange] = useState(['','']) 
    const [sorting , setSorting] = useState('')
    const [filteredProducts , setFilteredProducts] = useState([])

    // const [sort , setSort] = useState('')
    // function SortProducts (productsArray) {
    //     const arr = [...productsArray]
    //     switch(sort) {
    //         case 'price_asc' : return arr.sort((a,b) => a.price - b.price)
    //         case 'price_desc' : return arr.sort((a,b) => b.price - a.price)
    //         case 'rating_asc' : return arr.sort((a,b) => a.rating - b.rating)
    //         case 'rating_desc' : return arr.sort((a,b) => b.rating - a.rating)
    //         default : return arr
    //     }
    // }

    return (
        <ProductContext.Provider value={{
            allProducts,
            setAllProducts,
            searchText,
            setSearchText,
            selectedCategories,
            setSelectedCategories,
            minRating,
            setMinRating,
            priceRange,
            setPriceRange,
            sorting,
            setSorting,
            filteredProducts,
            setFilteredProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}
