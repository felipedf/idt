import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import { FaStar } from 'react-icons/fa';

const ReviewModal = ({product, handleCloseModal}) => {
    const [rating, setRating] = useState(0);
    const [userName, setUserName] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleSubmitReview = () => {
        // Here you can add code to submit the review data to your backend or database
        // For this example, we'll just log the data to the console
        console.log({
            rating,
            userName,
            reviewText,
            productId: product.id,
        });
        handleCloseModal();
    };

    return (
        <Modal show={true} onHide={handleCloseModal}>
            <Modal.Header>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={product.thumbnail}
                            className="card-img-top"
                            alt={`${product.name} image`}
                        />
                        <h5>{product.name}</h5>
                    </div>
                    <div className="col-md-6">
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="userName">Your Name:</label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control mb-2"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Rating:</label>
                        <div>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <div key={i}> test </div>
                                    // <FaStar
                                    //     key={i}
                                    //     className="star"
                                    //     color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                                    //     size={25}
                                    //     onClick={() => handleRatingClick(ratingValue)}
                                    // />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="reviewText">Your Review:</label>
                        <textarea
                            id="reviewText"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="form-control mb-2"
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleCloseModal}>Cancel</button>
                <button onClick={handleSubmitReview}>Submit Review</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReviewModal;