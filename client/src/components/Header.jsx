import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const HeaderHolder = styled.div`
  width: 100%;
`;

const Text = styled.h1`
  margin-right: 15px;
  float: left;
  margin-top: -6px;
  margin-bottom: 5px;
  float: left;
  font-size: 25px;
`;

const Searchbar = styled.input`
  height: 32px !important;
  padding: 7px;
  width: 100%;
  box-sizing: border-box
`;

const StarsHolder = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Header = props => (
  <HeaderHolder>
    <Text>{props.reviews} Reviews</Text>
    <StarsHolder>
      <StarRatings
        rating={props.rating}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </StarsHolder>
    <Searchbar type="text" placeholder="Search reviews"/>
  </HeaderHolder>
);

export default Header;
