
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reviewsHolder">
        <Header reviews={[1, 2, 3]} rating={2.2} />
        <Overview />
        <Review />

      </div>
    );
  }
}

export default App;
