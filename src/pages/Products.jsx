import { useEffect , useState , useContext, useRef} from "react";
import '../styles/ProductStyles.css'
import { getAvailableProducts } from "../services/GetService";
import { cartContext } from "../context/CartContext";   //name of portal
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ProductContext } from "../context/ProductContext";
import RenderProducts from "../components/RenderProducts";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu';

const Products = () => {
    //this state array contains all the product categories which have been checked filter checkboxes
    const [filterProductsArray , setFilterProductsArray] = useState([]) 
    //state for storing all the products
    const [productInfo,setProductInfo] = useState({products:[]})
    const productValue = useContext(ProductContext)
    //new code HERE !
    const [selectedMinPrice , setSelectedMinPrice] = useState(["0"])    //lower value of price filter (string)
    const [selectedMaxPrice , setSelectedMaxPrice] = useState(["1"])    //higher value of price filter (string)
    const [defaultPriceRangeValue , setDefaultPriceRangeValue] = useState(["0","1"]) //string
    const [rangeError , setRangeError] = useState('')
    // const {sort , setSort} = useContext(ProductContext)
    //state for keeping track of the sidebar , open or close
    const [filtersOpen, setFiltersOpen] = useState(false);
    const detailsRef = useRef(null)
    // new state for search text
    const [searchText, setSearchText] = useState('')

    function calculateMinMaxAllProducts(products) {
        const productPrices = products.map((item) => item.price)
        const minDefaultPrice = Math.min(...productPrices)
        const maxDefaultPrice = Math.max(...productPrices)
        setSelectedMinPrice(minDefaultPrice.toString())
        setSelectedMaxPrice(maxDefaultPrice.toString())
        return ([selectedMinPrice,selectedMaxPrice]) // return “stale” state intentionally
    }

    function updateMin (value) {
        setSelectedMinPrice(value)   // keep as string
    }

    function updateMax (value) {
        setSelectedMaxPrice(value)   // keep as string
    }

    function handleChange() {
        if(+selectedMinPrice < +selectedMaxPrice) {
            setRangeError('')
        }
        else if(+selectedMinPrice >= +selectedMaxPrice) {
            setRangeError('Min value must be smaller than Max value')
        }
        else if(selectedMinPrice==='' || selectedMaxPrice==='') {
            setRangeError('Please fill both the values')
        }
    }

    useEffect(() => {
        // run every time either box changes
        if (selectedMinPrice === '' || selectedMaxPrice === '') {
            setRangeError('Please fill both values');
        } 
        else if (+selectedMinPrice >= +selectedMaxPrice) {
            setRangeError('Min value must be smaller than Max');
        } 
        else {
            setRangeError('');                // perfect ➜ no warning
        }
    }, [selectedMinPrice, selectedMaxPrice])

    //this the Min Rating for rating filter in sidebar
    // console.log("The min rating currently is ",productValue.minRating)
    useEffect(() => {
        getAvailableProducts()
            .then(response => {
                setProductInfo({products:response.data.products})
            })
    },[])
    useEffect(() => {
        if(productInfo.products.length!==0) {
            const temp = calculateMinMaxAllProducts(productInfo.products)
            console.log("the value of temp is ",temp)
            setDefaultPriceRangeValue(temp) //store default values in a state
            console.log("Data received from productInfo")
        }
        else {
            console.log("Data still not received from productInfo")
        }
    },[productInfo.products])

    if(productInfo.products.length === 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',   // center horizontally
                    alignItems: 'center',       // center vertically
                    height: '100vh'             // full viewport height
                }}>
                <CircularProgress 
                    size="50px"
                    sx={{color: 'var(--loading-animation-color)'}}    
                />
            </Box>
        )
    }
    else {
        return (
            <div id="full-products-page">
                <div id="product-title-part">
                    <div id="product-filters-btn-wrapper" ref={detailsRef}>
                        <button id="product-filters-toggle-btn" onClick={() => setFiltersOpen(!filtersOpen)}>
                            <MenuIcon sx={{ color: 'var(--btn-txt)' }}/>
                        </button>
                    </div>
                    <h3 id="product-headings">Available Products</h3>
                    {/* <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                        id="product-search-input"
                    /> */}
                </div>
                <div id="product-details" className={filtersOpen ? 'sidebar-open' : ''}>
                    <div id="details-sidebar">
                        <Sidebar 
                            filterProductsArray={filterProductsArray} 
                            setFilterProductsArray={setFilterProductsArray} 
                            updateMin={updateMin} 
                            updateMax={updateMax} 
                            selectedMinPrice={selectedMinPrice}
                            selectedMaxPrice={selectedMaxPrice}
                            rangeError={rangeError}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="details-content" style={{ flex: 1 }}>
                        <RenderProducts 
                            productInfo={productInfo} 
                            filterProductsArray={filterProductsArray} 
                            selectedMinPrice={selectedMinPrice} 
                            selectedMaxPrice={selectedMaxPrice}
                            rangeError={rangeError}
                            searchText={searchText}
                        />
                    </div>    
            </div>
        </div>
        )
    }
    
}
export default Products