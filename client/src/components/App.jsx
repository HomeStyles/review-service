
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/_victa/128.jpg",
        name: "Andrew",
        body: "Suscipit nihil quisquam blanditiis. Laudantium inventore placeat ullam error illum maxime temporibus totam. Placeat rerum cumque. Error omnis velit laboriosam. Ex ex suscipit vel et fugit. Atque officia fugiat minus consequuntur blanditiis. Aut necessitatibus et perspiciatis dolore et perspiciatis quia quia dolores. Consequatur consequatur labore. Cum molestiae nam. Non qui eos ipsum laudantium tempore numquam debitis nam. Debitis ut ex quia autem cupiditate perferendis esse numquam accusantium.",
      },
    };
  }

  render() {
    return (
      <div className="reviewsHolder">
        <Header reviews={[1, 2, 3]} rating={2.2} />
        <Overview />
        <Review review={this.state.review}/>
      </div>
    );
  }
}

export default App;
