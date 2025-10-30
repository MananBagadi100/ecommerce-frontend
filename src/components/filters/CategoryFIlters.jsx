import { useContext, useEffect, useState } from "react"
import { getProductCategories } from "../../services/GetService"
import { ProductContext } from "../../context/ProductContext"
const CategoryFilters = () => {
    const [categoryNames , setCategoryNames] = useState([])
    const {selectedCategories , setSelectedCategories} = useContext(ProductContext)

    function handleCheckboxChange (categoryName) {
        const exists = selectedCategories.find((i) => categoryName === i)  
        if (exists) {   //we need to uncheck the box and remove that category name from the state
            setSelectedCategories((prev) => {
                return prev.filter((i) => i !== categoryName)
            })
        }
        else {  //we need to check the box and add that category name
            setSelectedCategories((prev) => {
                return [...prev, categoryName]
            })
        }
    }
    useEffect (() => {
        const fetchData = async () => {
            const response = await(await getProductCategories()).data
            console.log('the category is ',response)
            setCategoryNames(response.map((item) => item.slug))
        }
        fetchData()
    },[])
    console.log('the selected categories are',selectedCategories)
    return (
        <div className="category-full-container">
            <div className="category-heading">Categories</div>
            <div className="cateogory-list">
                {
                    categoryNames.map((categoryName) => (
                        <div className="cateogory-row" key={categoryName}>
                            <input 
                                type="checkbox"
                                checked={selectedCategories.find(item => item === categoryName) ? true : false} 
                                onChange={() => handleCheckboxChange(categoryName)}
                            />
                            <label>{categoryName}</label>
                        </div>
                    ))
                }
            </div>
            hello wrdl
        </div>
    )
}
export default CategoryFilters