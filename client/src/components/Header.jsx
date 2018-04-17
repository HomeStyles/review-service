import React from 'react';
import StarRatings from 'react-star-ratings';

const Header = props => (
  <div id="header">
    <h1>{props.reviews} 
      <StarRatings
        rating={props.rating}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </h1>
    <input type="text" placeholder="Search reviews"/>
  </div>
);

export default Header;
