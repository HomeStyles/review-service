import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Review from '../client/src/components/Review.jsx';

const fakeReview = {
  body: 'Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.',
  overall: '3.6666666666666665',
  firstname: 'Annabelle',
  imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp',
};

describe('Review Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Review review={fakeReview}/>));
  });

  it('correctly renders info section', () => {
    const wrapper = shallow(<Review review={fakeReview}/>);
    const info = (<div className="info">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jp" alt="user" />
        <span>Annabelle</span>
      </div>)
    expect(wrapper.contains(info)).toEqual(true);
  });

  it('correctly renders review body', () => {
    const wrapper = shallow(<Review review={fakeReview}/>);
    const info = (<p className="reviewBody" >Labore sed dicta amet aut recusandae. Voluptates dolorem non. Tempora vel possimus voluptas. Qui sunt et sint dolor impedit. Ratione quos quia iste eum temporibus sit. Illum et minima quibusdam sint laudantium cum. Voluptatem quod quam et odio quaerat et minima dignissimos magnam. Optio et impedit et eum sit. Enim praesentium et quia. Nihil neque quos in et.</p>)
    expect(wrapper.contains(info)).toEqual(true);
  });
});
