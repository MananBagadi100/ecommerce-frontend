import { useContext, useEffect, useState } from "react"
import { getProductCategories } from "../../services/GetService"
import { ProductContext } from "../../context/ProductContext"
const CategoryFilters = () => {
    const [categoryNames , setCategoryNames] = useState([])
    const {selectedCategories , setSelectedCategories} = useContext(ProductContext)

    function handleCheckboxChange (category) {
        const exists = selectedCategories.find((i) => category.slug === i.slug)  
        if (exists) {   //we need to uncheck the box and remove that category name from the state
            setSelectedCategories((prev) => {
                return prev.filter((i) => i.slug !== category.slug)
            })
        }
        else {  //we need to check the box and add that category name
            setSelectedCategories((prev) => {
                return [...prev, {name: category.name, slug: category.slug}]
            })
        }
    }
    useEffect (() => {
        const fetchData = async () => {
            const response = await(await getProductCategories()).data
            console.log('the category is ',response)

            setCategoryNames(response.map((item) => {
                return {
                    "slug": item.slug,
                    "name": item.name
                }
            }))
        }
        fetchData()
    },[])
    console.log('the selected categories are',selectedCategories)
    return (
        <div className="category-full-container">
            <div className="category-heading">Categories</div>
            <div className="cateogory-list">
                {
                    categoryNames.map((category) => (
                        <div className="cateogory-row" key={category.name}>
                            <input 
                                type="checkbox"
                                checked={selectedCategories.find(item => item.slug === category.slug) ? true : false} 
                                onChange={() => handleCheckboxChange(category)}
                            />
                            <label>{category.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default CategoryFilters