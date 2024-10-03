import { useState } from "react"
import { movies } from "../utils/constants"

const AddMovie=(MovieList,setMovieList)=>{
   console.log(MovieList,setMovieList)
    const[poster,SetPoster]=useState("")
    const[Name,SetName]=useState("")
    const[rating,SetRating]=useState("")
    const[summary,SetSummary]=useState("")
    return(
         <div style={{marginBotton:"10px"}}>
            {/* poster */}
           <label>Poster:</label> 
         <input type="text" value={poster} 
         onChange={(e)=>{SetPoster(e.target.value)}}
         /><br/>
           {/* name */}
           <label>Name:</label> 
         <input type="text" value={Name}  
         onChange={(e)=>{SetName(e.target.value)}}
         /><br/>
            {/* rating */}
            <label>Rating:</label> 
         <input type="text" value={rating} 
         onChange={(e)=>{SetRating(e.target.value)}}
         /><br/>
            {/* summary */}
            <label>summary:</label> 
         <input type="text" value={summary} 
         onChange={(e)=>{SetSummary(e.target.value)}}
         /><br/>

         <button
         onClick={() => {
            const Movie = { poster, Name, rating, summary };
            console.log(Movie);
            setMovieList([...MovieList, Movie]); 
          }}
        >
         AddMovie</button>
         </div>
    )
}
export default AddMovie