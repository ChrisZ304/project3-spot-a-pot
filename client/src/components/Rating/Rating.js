import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function StarComponent() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    
    <div  form={{type:"text"}}  style={{backgroundColor: "#232F3E"}}>
    <form>
  <label style={{fontWeight:'bold'}} >
    Written Review:
    <textArea style={{width: '601px', height: '100px'}} type="text" Review="review" />
  </label>
  <input type="submit" value="Submit" />
</form>
    <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    <form type="text" name="field[]" />
    </div>
    
  )
}