import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const StarHolder = styled.div`
  margin-left: auto;
  margin-right:0;
  display: block
  text-align: right;
  margin-bottom: 12px;
`;

const Category = styled.span`
  color: #484848 !important
  float: left;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: .2px;
  margin-bottom: 12px;
`;

const Overview = props => (
  <div id="overview">
    <div className="category">
      <Category>Accuracy</Category>
      <StarHolder>
        <StarRatings
          rating={props.overview.accuracy}
          starRatedColor="rgb(0,132,137)"
          starDimension="20px"
          starSpacing="2px"
        />
      </StarHolder>
    </div>
    <div className="category">
      <Category>Communication</Category>
      <StarHolder>
        <StarRatings
          rating={props.overview.communication}
          starRatedColor="rgb(0,132,137)"
          starDimension="20px"
          starSpacing="2px"
        />
      </StarHolder>
    </div>
    <div className="category">
      <Category>Cleanliness</Category>
      <StarHolder>
        <StarRatings
          rating={props.overview.cleanliness}
          starRatedColor="rgb(0,132,137)"
          starDimension="20px"
          starSpacing="2px"
        />
      </StarHolder>
    </div>
    <div className="category">
      <Category>Location</Category>
      <StarHolder>
        <StarRatings
          rating={props.overview.location}
          starRatedColor="rgb(0,132,137)"
          starDimension="20px"
          starSpacing="2px"
        />
      </StarHolder>
    </div>
    <div className="category">
      <Category>Check In</Category>
      <StarHolder>
        <StarRatings
          rating={props.overview.checkin}
          starRatedColor="rgb(0,132,137)"
          starDimension="20px"
          starSpacing="2px"
        />
      </StarHolder>
    </div>
    <div className="category">
      <Category>Value</Category>
      <StarHolder>
        <StarRatings
          rating={props.overview.value}
          starRatedColor="rgb(0,132,137)"
          starDimension="20px"
          starSpacing="2px"
        />
      </StarHolder>
    </div>
  </div>
);

export default Overview;
