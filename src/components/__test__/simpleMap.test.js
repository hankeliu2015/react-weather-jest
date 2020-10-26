import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Navbar from '../../Navbar';
import App from '../../App';

let wrapped;
let wrapped2;

beforeEach(() => {
  wrapped = shallow(<Navbar />);
  wrapped2 = mount(<App />);
})

afterEach(() => {
  wrapped.unmount();
})

it('show a form', () => {
  expect(wrapped2.find("form").length).toEqual(1)
})

// it('show 2 input buttons', () => {
//   expect(wrapped.find("input").length).toEqual(2)
// })

// it('input area user can type in location', () => {
//   wrapped2.find("input").simulate('change', {
//     target: {value: 'city name 123456'}
//   });
//
//   wrapped2.update();
//   expect(wrapped2.find('input').prop('value')).toEqual("city name 123456");
//
// })
