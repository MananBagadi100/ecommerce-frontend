import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    
    const [allProducts , setAllProducts] = useState([]) //contains all the products
    const [searchText , setSearchText] = useState('')   //search text in product search bar
    const [selectedCategories , setSelectedCategories] = useState([])   //selected category filters
    const [minRating , setMinRating] = useState(0)  // contains the min rating for rating filter
    const [priceRange , setPriceRange] = useState(['',''])      //filter for price range
    const [sorting , setSorting] = useState('')                 //sorting the products
    const [filteredProducts , setFilteredProducts] = useState([])   //the products after filtering , has everything if no filtered selected
    
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
        if (searchText !== '') {
            result = result.filter ((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if (sorting !== '') {
            switch (sorting) {
                case "price_low_high": 
                    result = result.sort((a,b) => a.price - b.price)
                break
                case "price_high_low":
                    result = result.sort((a,b) => b.price - a.price)
                break
                case "rating_high_low":
                    result = result.sort((a,b) => b.rating - a.rating)
                break
                case "rating_low_high":
                    result = result.sort((a,b) => a.rating - b.rating)
            }
        }

        setFilteredProducts(result)
    }
    // function to reset all the filters to none
    function resetFilters () {
        setSearchText('')
        setSelectedCategories([])
        setMinRating(0)
        setPriceRange(['',''])
        setSorting('')
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
            setFilteredProducts,
            resetFilters
        }}>
            {children}
        </ProductContext.Provider>
    )
}
