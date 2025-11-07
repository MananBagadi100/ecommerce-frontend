import { useEffect , useState , useContext} from "react";
import '../styles/ProductStyles.css'
import { ProductContext } from "../context/ProductContext";
import { useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/Sidebar";
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { getAvailableProducts } from "../services/GetService";
import ProductList from "../components/ProductList";
const Products = () => {
    const isMobile = useMediaQuery('(max-width: 650px)')
    const [ isDrawerOpen , setIsDrawerOpen ] = useState(false)
    const {allProducts,setAllProducts,searchText,setSearchText} = useContext(ProductContext)
    useEffect (() => {
        const fetchData = async () => {
            const response = await(await getAvailableProducts()).data
            setAllProducts(response.products.map((item) => item))   //storing all products
        }
        fetchData()
    },[])
    return (
        <div className="products-full-container">
            <div className="products-sidebar">
                {
                    isMobile && (       /* Hamburger button for mobile only*/ 
                            <IconButton 
                            size="large"
                            edge="start"
                            onClick={() => setIsDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                    )
                }
                {
                    isMobile ? (
                        <SwipeableDrawer 
                            anchor="left"
                            open={isDrawerOpen}
                            onOpen={() => setIsDrawerOpen(true)}
                            onClose={() => setIsDrawerOpen(false)}
                            slotProps={{ paper: { sx: { width: 250 , backgroundColor : 'var(--sidebar-filters-bg)'} } }}
                        >
                            <Sidebar setIsDrawerOpen={setIsDrawerOpen} isMobile={isMobile}/>
                        </SwipeableDrawer>
                    ) : (
                        <Sidebar isMobile={isMobile}/>
                    )
                }
            </div>
            <div className="products-main-content-area">
                <div className="products-main-heading">Available Products</div>
                <div className="products-search-bar-wrapper">
                    <input
                        className="products-search-bar"
                        type="text"
                        placeholder="Search products here ..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="products-display-area">
                    <ProductList />
                </div>
            </div>
                
        </div>
    )
}
export default Products