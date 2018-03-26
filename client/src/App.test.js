import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App', () => {
  const app = shallow(<App />);
  console.log(app.debug())

  it('renders div', () => {
    expect(app.find('div').exists).toBe(true);
  });
});
