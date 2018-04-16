
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="reviewsHolder">
        <Header />
        <Overview />
        <Review review={this.state.review}/>

      </div>
    );
  }
}

export default App;
