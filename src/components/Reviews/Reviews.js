import React, { useEffect, useState } from 'react';
import ReviewSet from '../ReviewSet/ReviewSet';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return (
        <div>
            {
                reviews.map(review => <ReviewSet
                key={review.id}
                review={review}
                ></ReviewSet>)
            }
        </div>
    );
};

export default Reviews;