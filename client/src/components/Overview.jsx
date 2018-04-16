import React from 'react';
import StarRatings from 'react-star-ratings';

const Overview = props => (
  <div id="overview">
    <div className="category">
      <span>Accuracy</span>
      <StarRatings
        rating={4.5}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Communication</span>
      <StarRatings
        rating={4.5}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Cleanliness</span>
      <StarRatings
        rating={4.5}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Location</span>
      <StarRatings
        rating={4.5}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Check In</span>
      <StarRatings
        rating={4.5}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Value</span>
      <StarRatings
        rating={4.5}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
  </div>
);

export default Overview;
