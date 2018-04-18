import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Header from '../client/src/components/Header.jsx';

const fakeResponse = {
  reviews: [
    {
      body: 'Aut iusto animi sint dolore non delectus asperiores voluptates voluptatem. Enim facere odit repellat odit voluptatum quam doloribus eum. Debitis voluptas incidunt neque. Voluptas est ullam reiciendis doloremque qui omnis quaerat. Aut eos dolores error est consectetur hic perspiciatis. Repellendus ratione cum eum nulla nihil deserunt enim debitis. Maxime ipsa libero. Adipisci dolorem nemo dicta blanditiis. Facilis ea aut quis dolor et ullam. Atque dignissimos facere odio. Provident dolor qui id ipsam ipsa. Officiis minima fuga asperiores voluptatem mollitia eveniet quia culpa. Atque deleniti unde qui vel.',
      overall: '4',
      firstname: 'Leanna',
      imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
    },
    {
      body: 'Id sed vitae optio perspiciatis omnis cumque qui. Repellat sit ea laborum nihil ex sed in. Eum vel perspiciatis nihil nihil sit. Debitis quia et omnis sint sit consectetur qui illo. Voluptatem provident et dolor exercitationem non esse sed sit occaecati. Voluptate dolor assumenda adipisci architecto qui suscipit unde quia. Illo vero recusandae quia. Est consequatur magni itaque exercitationem ea autem. Perspiciatis nesciunt quis. Occaecati eum repudiandae sunt voluptatem omnis blanditiis veniam autem expedita. Cumque temporibus quas aliquid numquam amet voluptatem. Et optio sint dolore sint.',
      overall: '3.6666666666666665',
      firstname: 'Rolando',
      imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jffgrdnr/128.jpg',
    },
    {
      body: 'Et sit aspernatur perferendis non doloremque ut doloremque. Doloribus placeat dicta neque dolorum. Officiis quo nobis veritatis quibusdam et rem molestias laboriosam necessitatibus. Itaque reprehenderit aspernatur quis sunt rerum placeat dolorem ut odio. Est laboriosam voluptatem magnam voluptatem voluptatibus. Sed expedita dolorem atque dolore quam. Temporibus nulla et porro minus eligendi quas quia velit. Temporibus voluptatem provident et. Eveniet quia aspernatur numquam qui. Quam necessitatibus maiores. Ut praesentium reiciendis sed iste velit. Id enim itaque excepturi ab aliquam exercitationem dolor.',
      overall: '4.333333333333333',
      firstname: 'Enrico',
      imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/xripunov/128.jpg',
    },
  ],
  overview: {
    id: 2,
    overall: 5,
    accuracy: 5,
    communication: 5,
    cleanliness: 3,
    location: 3,
    checkin: 3,
    value: 4,
  },
};

describe('Header Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Header reviews={fakeResponse.reviews.length} rating={fakeResponse.overview.overall} />));
  });
});
