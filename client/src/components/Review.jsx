import React from 'react';

const Review = props => (
  <div className="review">
    <div className="info">
      <img src={props.review.imageurl} alt="user" />
      <span>{props.review.firstname}</span>
    </div>
    <p className="reviewBody">{props.review.body}</p>
  </div>
);

export default Review;
