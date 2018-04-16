
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {
        accuracy: 4.2,
        communication: 3.8,
        cleanliness: 4.5,
        location: 3.9,
        checkin: 4.8,
        value: 3.7
      }
    };
  }

  render() {
    return (
      <div className="reviewsHolder">
        <Header />
        <Overview overview={this.state.overview}/>
        <Review />

      </div>
    );
  }
}

export default App;
