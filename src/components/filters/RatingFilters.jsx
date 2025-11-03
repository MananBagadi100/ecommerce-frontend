import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
const RatingFilter = () => {
    const {minRating,setMinRating} = useContext(ProductContext)
    console.log('the min rating is ',minRating)
    return (
        <div className="rating-full-container">
            <div className="minRating-heading">Ratings</div>
            <form className="minRating-list">
                <input 
                    type="radio"
                    value="4"
                    checked={minRating === 4}
                    onChange={() => setMinRating(4)}
                />
                <label>4⭐ & up</label>
                <br />
                <input 
                    type="radio"
                    value="3"
                    checked={minRating === 3}
                    onChange={() => setMinRating(3)}
                />
                <label>3⭐ & up</label>
                <br />
                <input 
                    type="radio"
                    value="2"
                    checked={minRating === 2}
                    onChange={() => setMinRating(2)}
                />
                <label>2⭐ & up</label>
                <br />
                <input 
                    type="radio"    /*Default selected */
                    value="0"
                    checked={minRating === 0}
                    onChange={() => setMinRating(0)}
                />
                <label>No Rating</label>
                <br />
            </form>
        </div>
    )
}
export default RatingFilter