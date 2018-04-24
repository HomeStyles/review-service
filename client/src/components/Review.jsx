import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  margin-right: 15px;
  float: left;
`;

const Name = styled.p`
  margin: 0px;
  font-size: 17px;
  line-height: 24px;
  font-weight: bold;
`;

const Date = styled.p`
  margin: 0px;
  font-size: 15px;
  line-height: 22px;
`;

const Review = props => (
  <div className="review">
    <div className="info">
      <Avatar src={props.review.imageurl} alt="user" />
      <Name>{props.review.firstname}</Name>
      <Date>April 2018</Date>
    </div>
    <p className="reviewBody">{props.review.body}</p>
    <hr>
  </div>
);

export default Review;
