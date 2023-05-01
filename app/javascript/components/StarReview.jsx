import React from "react";
import { FaStar } from "react-icons/fa";

const StarReview = ({handleRatingClick, rating}) => {
    return [...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <FaStar
                        key={i}
                        className="star"
                        color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                        size={25}
                        onClick={handleRatingClick && (() => handleRatingClick(ratingValue))}
                    />
                );
            })
}

export default StarReview;