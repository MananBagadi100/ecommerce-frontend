import '../styles/SidebarStyles.css'
import CategoryFilters from './filters/CategoryFIlters';
import CloseIcon from '@mui/icons-material/Close';
import RatingFilter from './filters/RatingFilters';
import PriceFilters from './filters/PriceFilters';
import ProductSorting from './filters/ProductSorting';
const Sidebar = ({setIsDrawerOpen,isMobile}) => {
    return (
        <div className="sidebar-full-container">
            <div className="sidebar-content-area">
                <div className="sidebar-heading-area">
                    <div className="sidebar-main-heading">Filters</div>
                    {
                        isMobile && (
                            <div className="sidebar-close-btn-wrapper">
                                <button className="sidebar-close-btn" onClick={() => setIsDrawerOpen(false)}>
                                    {<CloseIcon sx={{fontSize: 20}}/>}
                                </button>
                            </div>
                            
                        )
                    }
                </div>
                <div className="sidebar-categories">
                    <CategoryFilters />
                    <RatingFilter />
                    <PriceFilters />
                    <ProductSorting />
                </div>
                
            </div>
            
        </div>
    )
}
export default Sidebar