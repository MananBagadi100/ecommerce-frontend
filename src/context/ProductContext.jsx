import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    
    const [allProducts , setAllProducts] = useState([])
    const [searchText , setSearchText] = useState('')
    const [selectedCategories , setSelectedCategories] = useState([])
    const [minRating , setMinRating] = useState(0) 
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

    //filtering logic
    function applyFilters (selectedCategories,minRating,priceRange,sorting,searchText) {
        let result = [...allProducts]
        if (selectedCategories.length !== 0) {
            result = result.filter((product) => selectedCategories.some((i) => i.slug === product.category))
        }
        if (minRating !== 0) {
            result = result.filter((product) => product.rating > minRating)
        } 
        if (priceRange[0] !== '' || priceRange[1] !== '') {
            const min = priceRange[0] === '' ? 0 : Number(priceRange[0])
            const max = priceRange[1] === ''? Infinity : Number(priceRange[1])
            result = result.filter((product) => min < product.price && product.price < max)
        }
        console.log("The result after FILTERING is ",result)
        setFilteredProducts(result)
    }
    useEffect (() => {
        applyFilters(selectedCategories,minRating,priceRange,sorting,searchText)
    },[selectedCategories,minRating,priceRange,sorting,searchText,allProducts])
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
