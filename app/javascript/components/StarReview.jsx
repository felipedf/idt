import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarReview = ({handleRatingClick, rating}) => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starIcons.push(<FaStar key={i} className="star" color="#ffc107" size={25} onClick={handleRatingClick && (() => handleRatingClick(i))} />);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            starIcons.push(<FaStarHalfAlt key={i} className="star" color="#ffc107" size={25} onClick={handleRatingClick && (() => handleRatingClick(i))} />);
        } else {
            starIcons.push(<FaStar key={i} className="star" color="#e4e5e9" size={25} onClick={handleRatingClick && (() => handleRatingClick(i))} />);
        }
    }

    return starIcons;
}

export default StarReview;