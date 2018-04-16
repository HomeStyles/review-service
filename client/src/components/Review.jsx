import React from 'react';

const Review = props => (
  <div className="review">
    <div className="info">
      <img src={props.review.imageurl} alt="user" />
      <span>{props.review.name}</span>
    </div>
    <p>{props.review.body}</p>
  </div>
);

export default Review;
