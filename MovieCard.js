import { useState } from "react";
import SpecialButtons from "./SpecialButtons";

const MovieCard=({name,poster,rating,summary,Cart,setCart})=>{
    //console.log(name,poster,rating,summary)
    //console.log(Cart)
    const[show,setShow]=useState(false)
    const [btnText,setBtnText]=useState('Add to Cart')

    //console.log(show)
    const movieRating={
        color:rating>8?"green":"red"
    }
    return(
       <>
        <div className="MovieContainer">
            <img className="movieposter" src={poster} alt=""/>
            <div className="moviespecs">
                <h4 className="movieName">{name} </h4>
                <h4 style={movieRating}>{rating}</h4>
                </div>
                <div>
                <span><button
                onClick={()=>{
                    setShow(!show)}}
                >toggle</button> 
                <span><button
                onClick={()=>{
                    //setCart(Cart+1)
                    //setBtnText()
                    btnText=="Add to Cart"?setBtnText("Remove from Cart"):setBtnText("Add to Cart")
                    console.log(btnText)
                    btnText=="Add to Cart"?setCart(Cart+1):setCart(Cart-1)
                }}
                >{btnText=="Add to Cart"?"Add to Cart":"Remove from Cart"}</button> </span>
                <span><SpecialButtons/></span>
                </span>
                </div>
                {show && <p className="moviesummary">{summary}</p>}
        </div>
       </>
    )
}
export default MovieCard;