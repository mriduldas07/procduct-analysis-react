import React from 'react';
import './ReviewSet.css'

const ReviewSet = ({review}) => {
    const {name,reviewComent, rating} = review;
    return (
        <div className='review-box'>
            <div className="review-name">
                <h3>{name}</h3>
                <p>{reviewComent}</p>
            </div>
            <div className="review-rating">
                <h3>Rating: {rating} star</h3>
            </div>
            
        </div>
    );
};

export default ReviewSet;