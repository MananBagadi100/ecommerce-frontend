import '../styles/SidebarStyles.css'
import { getProductCategories } from '../services/GetService'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useSearchParams } from 'react-router-dom'

const Sidebar = ({
  filterProductsArray , setFilterProductsArray , 
  updateMin , updateMax , rangeError , 
  selectedMinPrice , selectedMaxPrice , handlePriceFilter , handleChange
}) => {
    const [ categories , setCategories] = useState([])
    const {minRating , setMinRating} = useContext(ProductContext)
    const [searchParams] = useSearchParams();

    function handleCategoryFilterChange (categoryObject) {
        const exists = filterProductsArray.find((item) => (item.slug === categoryObject.slug))
        if(exists) {    //checkbox is already checked
            setFilterProductsArray((prev) => {
                return prev.filter((item) => item.slug !== categoryObject.slug)
            })
        }
        else {  //checkbox is being checked now
            setFilterProductsArray((prev) => {
                return [...prev, {
                    slug : categoryObject.slug,
                    name : categoryObject.name,
                    url : categoryObject.url
                }]
            })
        }
        console.log("the checked box name is ",categoryObject.name )
        console.log("the checked box slug is ",categoryObject.slug )
        console.log("the checked box url is ",categoryObject.url )
    }

    useEffect (() => {
        const fetchData = async () => {
            const response = await getProductCategories()
            const finalResponse = await response.data
            setCategories(finalResponse)

            const urlCategory = searchParams.get('category');   //getting the value of category from url
            if (urlCategory) {
              const found = finalResponse.find(c => c.slug === urlCategory);    //finding if the category exists or not 
              if (found) {
                setFilterProductsArray(prev => (
                  prev.some(i => i.slug === found.slug)
                    ? prev
                    : [...prev, { slug: found.slug, name: found.name, url: found.url }]
                ));
              }
            }
        }
        fetchData()
    },[searchParams])

    return (
        <div id="main-content-area">
            <div id='sidebar-main-div'>Filter by : </div>
                <div id='category-filter'>
                    <div id='category-title'>Category</div>
                    <div id='category-types'>
                        {
                        categories.map((eachCategory) => (
                            <div key={eachCategory.slug} className='product-category-types'>
                                <form>
                                    <label>
                                        <input
                                            type='checkbox'
                                            name={eachCategory.slug}
                                            onChange={() =>{handleCategoryFilterChange(eachCategory)}}
                                            checked={filterProductsArray.some(item => item.slug === eachCategory.slug)}
                                        />{eachCategory.name}
                                    </label>
                                </form>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div id='rating-filter'>
                    <div id="rating-title">Rating</div>
                    <div id="rating-types">
                        <form>
                            <label>
                                <input
                                    type='radio'
                                    value=''
                                    name='rating-filter-options'
                                    onChange={() =>setMinRating(null)}
                                    checked={minRating === null}
                                />All Ratings
                            </label><br />
                            <label>
                                <input
                                    type='radio'
                                    value='4'      
                                    name='rating-filter-options'                  
                                    checked={minRating === 4}                
                                    onChange={() =>setMinRating(4)}
                                />⭐️⭐️⭐️⭐️ & up
                            </label><br />
                            <label>
                                <input
                                    type='radio'
                                    value='3'
                                    name='rating-filter-options'
                                    checked={minRating === 3}
                                    onChange={() =>setMinRating(3)}
                                />⭐️⭐️⭐️ & up
                            </label><br />
                            <label>
                                <input
                                    type='radio'
                                    value='2'         
                                    name='rating-filter-options'
                                    checked={minRating === 2}
                                    onChange={() =>setMinRating(2)}
                                />⭐️⭐️ & up
                            </label>
                        </form>
                    </div>
                </div>
                <div id="price-filter">
                    <div id="price-filter-title">Price Range</div>
                    <div id="price-filter-options">
                        <form>
                            <div id='price-filter-inputs'>
                                <label>Min : 
                                    <input
                                        className='price-filter-box'
                                        type='number'
                                        value={selectedMinPrice}
                                        name='price-range-to'
                                        onChange={(e) => updateMin(e.target.value)}
                                    />
                                </label>
                                <label>Max :
                                    <input
                                        className='price-filter-box'
                                        type='number'
                                        value={selectedMaxPrice}
                                        name='price-range-from'
                                        onChange={(e) => updateMax(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div id='price-filter-warning'>{rangeError}</div>
                        </form>
                    </div>
                </div>
            <div>hey how are you </div>
        </div>
    )
}
export default Sidebar