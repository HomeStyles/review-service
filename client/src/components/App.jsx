
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';
import queryString from 'query-string';
import styled from 'styled-components';

const ReviewsHolder = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: 1,
      reviews: [{
        body: 'Ad error quia quos ipsa ut. Ab quisquam est nulla. Cumque optio ut voluptatem quibusdam. Fugit sequi quisquam tempore sint a est. Fugit amet adipisci. Earum quam ipsum numquam. Quo adipisci modi doloremque ex a. Doloribus aut odit. Voluptatem laborum id nobis voluptas eius quaerat unde ratione. Impedit quia accusamus fuga non accusantium ullam.',
        overall: 4.2,
        firstname: 'andrew',
        imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jayphen/128.jpg'
      }],
      overview: {
        overall: 4.2,
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
    fetch(`http://localhost:8080/listings/${id}`)
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
      <ReviewsHolder className="reviewsHolder">
        <Header reviews={this.state.reviews.length} rating={this.state.overview.overall} />
        <hr/>
        <Overview overview={this.state.overview} />
        <hr/>
        {this.state.reviews.map((review, key) => <Review key={key} review={review} />)}
      </ReviewsHolder>
    );
  }
}

export default App;
