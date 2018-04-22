import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const HeaderContainer = styled.div`
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

const StarsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Header = props => (
  <HeaderContainer>
    <Text>{props.reviews} Reviews</Text>
    <StarsContainer>
      <StarRatings
        rating={props.rating}
        starRatedColor='rgb(0,132,137)'
        starDimension="20px"
        starSpacing="2px"
      />
    </StarsContainer>
    <Searchbar onKeyPress={props.search} type="text" placeholder="Search reviews"/>
  </HeaderContainer>
);

export default Header;
