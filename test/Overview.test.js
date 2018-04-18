import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Overview from '../client/src/components/Overview.jsx';

const fakeOverview = {
  id: 2,
  overall: 5,
  accuracy: 5,
  communication: 5,
  cleanliness: 3,
  location: 3,
  checkin: 3,
  value: 4
};

describe('Overview Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Overview overview={fakeOverview}/>));
  });
});
