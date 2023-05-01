import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReviewModal from './ReviewModal';
import StarReview from "./StarReview";

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [showReviewModal, setShowReviewModal] = useState(false);
    const imagePlaceHolder = 'https://picsum.photos/200';

    useEffect(() => {
        const url = "/api/products";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Try again later!');
            })
            .then((res) => setProducts(res))
            .catch(() => navigate("/"));
    }, []);

    const handleReviewClick = (product) => {
        setSelectedProduct(product);
        setShowReviewModal(true);
    }

    const handleCloseModal = () => {
        setShowReviewModal(false);
    }

    const allProducts = products.map((product, index) => (
        <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <img
                    src={product.thumbnail || imagePlaceHolder }
                    className="card-img-top"
                    alt={`${product.name} image`}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="mb-3">
                        {console.log(product.overall_rating) }
                        <StarReview rating={product.overall_rating} />
                    </div>
                    <Link to={'#'} onClick={() => handleReviewClick(product)} className="card-text btn custom-button">
                        Review Product
                    </Link>
                </div>
            </div>
        </div>
    ));
    const noProduct = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No products yet. Try creating one in the DB using the console.
            </h4>
        </div>
    );

    return (
        <>
            <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                    <h1 className="display-4">Products for every occasion</h1>
                    <p className="lead text-muted">
                        We’ve pulled together our most popular products, our latest
                        additions, and our editor’s picks, so there’s sure to be something
                        tempting for you to try.
                    </p>
                </div>
            </section>
            <div className="py-5">
                <main className="container">
                    <div className="row">
                        {products.length > 0 ? allProducts : noProduct}
                    </div>
                </main>
            </div>

            {showReviewModal && (
                <ReviewModal
                    product={selectedProduct}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </>
    );
};

export default Products;