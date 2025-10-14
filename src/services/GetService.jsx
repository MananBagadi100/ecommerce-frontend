import axios from "axios";
const client = axios.create({
    baseURL:'https://dummyjson.com/products'
    })
 //gets the products
export const getAvailableProducts = () => {        
    return client.get('?limit=194')
}
export const getOutOfStockProducts = () => {
    return client.get('?limit=10&skip=30')
}
//gets all details of that particular product
export const getProductDetails = (prod_id) => {
    return client.get(`/${prod_id}`)
}
//only gets the names of all the product categories
export const getProductCategories = () => {
    return client.get('/categories')
}
//returns all products of that category only
export const getAllTheCategoryItems = (url) => {
    return axios.get(url)
}
//get the featured product details
export const getFeaturedProducts = (id1 , id2 , id3) => {
    return (
        [client.get(`/${id1}`) , client.get(`/${id2}`) , client.get(`/${id3}`)]
    )
}