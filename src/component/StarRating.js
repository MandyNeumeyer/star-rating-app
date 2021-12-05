import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const starArray = Array(5).fill(0)
    console.log(starArray)
    return (
        <>
            <div className="star-rating">
                {starArray.map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >

                            <FaStar size={70} />
                        </button>
                    );
                })}
            </div>
            <h2>Your rating is: {rating > 0 ? rating : ""}</h2>
            <h5 className="thanks">{rating > 0? "Thanks for your participation!": ""} </h5>
        </>
    )
}

export default StarRating
