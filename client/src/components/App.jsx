/* eslint-disable */
import React from 'react';
import Header from './Header.jsx';
import Overview from './Overview.jsx';
import Review from './Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="reviewsHolder">
        <Header />
        <Overview />
        <Review />
      </div>
    );
  }
}

export default App;
