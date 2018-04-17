
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';
import queryString from 'query-string';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listing: 1,
      reviews: [{
        body: '',
        overall: '',
        firstname: '',
        imageurl: ''
      }],
      overview: {
        overall: 0,
      },
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    const currentId = Number(parsed.id);
    if (currentId) {
      this.renderListing(currentId);
    } else {
      this.renderListing(this.state.listing);
    }
  }

  renderListing(id) {
    fetch(`http://localhost:3000/listings/${id}`)
      .then(response => response.json())
      .then((myJson) => {
        this.setState({
          reviews: myJson.reviews,
          overview: myJson.overview[0],
          listing: id,
        });
      });
  }
  
  render() {
    return (
      <div className="reviewsHolder">
        <Header reviews={this.state.reviews.length} rating={this.state.overview.overall} />
        <Overview overview={this.state.overview} />
        {this.state.reviews.map((review, key) => <Review key={key} review={review} />)}
      </div>
    );
  }
}

export default App;
