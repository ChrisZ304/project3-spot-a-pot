// import React, { useState } from 'react'
// import { Rating } from 'react-simple-star-rating'

// export default function MyComponent() {
//   const [rating, setRating] = useState(0) // initial rating value

//   // Catch Rating value
//   const handleRating = (rate) => {
//     setRating(rate)
//     // Some logic
//   }

//   return (
    
    
//     <div className="text-box" form={{type:"text"}}  style={{backgroundColor: "#232F3E"}}>
//     <form>
//   <label style={{fontWeight:'bold', textSize: '100px'}} >
//     Written Review:
//     <textArea style={{width: '601px', height: '100px'}} type="text" Review="review" />
//   </label>
//   <input  type="submit" value="Submit" />
//   <Rating name="hover-feedback" onClick={handleRating} ratingValue={rating} /* Rating Props */ />
//     <form type="text" name="field[]" />
// </form>
    
//     </div>
    
//   )
// }