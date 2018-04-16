
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: 1,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/listings/${this.state.listing}`)
      .then(response => response.json())
      .then((myJson) => {
        this.setState({
          reviews: myJson.reviews,
          overview: myJson.overview,
        });
      });
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
