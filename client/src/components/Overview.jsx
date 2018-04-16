import React from 'react';
import StarRatings from 'react-star-ratings';

const Overview = props => (
  <div id="overview">
    <div className="category">
      <span>Accuracy</span>
      <StarRatings
        rating={props.overview.accuracy}
        starRatedColor="rgb(0,132,137)"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Communication</span>
      <StarRatings
        rating={props.overview.communication}
        starRatedColor="rgb(0,132,137)"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Cleanliness</span>
      <StarRatings
        rating={props.overview.cleanliness}
        starRatedColor="rgb(0,132,137)"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Location</span>
      <StarRatings
        rating={props.overview.location}
        starRatedColor="rgb(0,132,137)"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Check In</span>
      <StarRatings
        rating={props.overview.checkin}
        starRatedColor="rgb(0,132,137)"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
    <div className="category">
      <span>Value</span>
      <StarRatings
        rating={props.overview.value}
        starRatedColor="rgb(0,132,137)"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
  </div>
);

export default Overview;
