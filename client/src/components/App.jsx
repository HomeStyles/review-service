
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {
        accuracy: 4.4,
        communication: 4.2,
        cleanliness: 2,
        location: 5,
        checkin: 4.8,
        value: 3,
      },
    };
  }

  render() {
    return (
      <div className="reviewsHolder">
        <Header reviews={[1, 2, 3]} rating={2.2} />
        <Overview overview={this.state.overview} />
        <Review />

      </div>
    );
  }
}

export default App;
