import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {
  const routes = shallow(<Routes />);
  console.log(routes.debug());

  it('renders Switch component', () => {
    expect(routes.find('Switch').exists()).toBe(true);
  });

  it('renders 8 AppliedRoute components', () => {
    expect(routes.find('Switch').children()).toHaveLength(8);
  });

  it('renders AppliedRoute component with path /', () => {
    expect(routes.find('Switch').childAt(0).props().path).toEqual('/');
  });

  it('renders AppliedRoute component with path /register', () => {
    expect(routes.find('Switch').childAt(1).props().path).toEqual('/register');
  });

  it('renders AppliedRoute component with path /signin', () => {
    expect(routes.find('Switch').childAt(2).props().path).toEqual('/signin');
  });

  it('renders AppliedRoute component with path /about', () => {
    expect(routes.find('Switch').childAt(3).props().path).toEqual('/about');
  });

  it('renders AppliedRoute component with path /courses', () => {
    expect(routes.find('Switch').childAt(4).props().path).toEqual('/courses');
  });

  it('renders AppliedRoute component with path /courses/:index/:courseSlug', () => {
    expect(routes.find('Switch').childAt(5).props().path).toEqual('/courses/:index/:courseSlug');
  });

  it('renders AppliedRoute component with path /courses/:index/:courseSlug/:episodeNum', () => {
    expect(routes.find('Switch').childAt(6).props().path).toEqual('/courses/:index/:courseSlug/:episodeNum');
  });

});