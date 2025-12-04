import { useEffect, useState } from 'react'
import { getFeaturedProducts } from '../../services/GetService'
import './../../styles/HomeStyles/TopProductsSectionStyles.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import * as motion from "motion/react-client"
import SpotlightLayout from './SpotlightLayout.jsx'
import { easeIn, easeOut } from 'motion';
const TopProductsSection = () => {
    const [topProducts , setTopProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await Promise.all(getFeaturedProducts(123,8,95,173,179,191))  //getting all top prouducts
            setTopProducts(response.map(res => res.data))   //putting all the products data in state
        }
        fetchData()
    },[]) 
    return (
        <div className='top-products-full-container'>
            <div className="top-products-title">Top Products</div>
            <div className="top-products-content-area">
                <motion.div 
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{
                        duration:1,
                        delay:0.3,
                        ease:easeOut
                    }}
                    className="top-products-section">
                    {
                        topProducts.length === 0 ? (
                            <Box sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <CircularProgress />
                            </Box> 
                        ) : (
                            <SpotlightLayout 
                                spotlightProduct={topProducts[0]}
                                supportingProductTop={topProducts[1]}
                                supportingProductBottom={topProducts[2]}
                            />
                        )
                    }
                </motion.div>

                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{
                        duration:1,
                        delay:0.5,
                        ease:easeOut
                    }}
                    className="top-products-section">
                    {
                        topProducts.length === 0 ? (
                            <Box sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <SpotlightLayout 
                                spotlightProduct={topProducts[3]}
                                supportingProductTop={topProducts[4]}
                                supportingProductBottom={topProducts[5]}
                            />
                        )
                    }
                </motion.div>
            </div>
        </div>
    )
}
export default TopProductsSection