
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';
import queryString from 'query-string';
import styled from 'styled-components';

const ReviewsHolder = styled.div`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: .2px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: 1,
      reviews: null,
      overview: {
        overall: 4.2,
      },
      toRender: [{
        body: 'Ad error quia quos ipsa ut. Ab quisquam est nulla. Cumque optio ut voluptatem quibusdam. Fugit sequi quisquam tempore sint a est. Fugit amet adipisci. Earum quam ipsum numquam. Quo adipisci modi doloremque ex a. Doloribus aut odit. Voluptatem laborum id nobis voluptas eius quaerat unde ratione. Impedit quia accusamus fuga non accusantium ullam.',
        overall: 4.2,
        firstname: 'Andrew',
        imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jayphen/128.jpg'
      }],
    };

    this.searchReviews = this.searchReviews.bind(this);
    this.renderListing = this.renderListing.bind(this);
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

  searchReviews(event) {
    if(event.key == 'Enter') {
      const found = this.state.reviews.filter((review) => {
        return review.body.indexOf(event.target.value) >= 0;
      });

      this.setState({
        toRender: found,
      });
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
          toRender: myJson.reviews,
        });
      });
  }

  render() {
    return (
      <ReviewsHolder className="reviewsHolder">
        <Header search={this.searchReviews} reviews={this.state.toRender.length} rating={this.state.overview.overall} />
        <hr/>
        <Overview overview={this.state.overview} />
        <hr/>
        {this.state.toRender.map((review, key) => <Review key={key} review={review} />)}
      </ReviewsHolder>
    );
  }
}

export default App;
