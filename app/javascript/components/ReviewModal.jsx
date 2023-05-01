import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaStar } from 'react-icons/fa';
import StarReview from "./StarReview";

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
                <div className="col-md-6 mb-1">
                    <img
                        src={product.thumbnail}
                        className="card-img-top mb-1"
                        alt={`${product.name} image`}
                    />
                    <h5>{product.name}</h5>
                </div>
                <div className="col-md-11">
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="col-md-11">
                <div className="form-group">
                    <label htmlFor="userName">Your Name:</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control mb-3"
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Rating:</label>
                    <div>
                        <StarReview handleRatingClick={handleRatingClick} rating={rating} />
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
                <button onClick={handleSubmitReview}>Add Review</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReviewModal;