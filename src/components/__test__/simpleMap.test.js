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
  wrapped2 = mount(<Navbar />);
})

afterEach(() => {
  wrapped2.unmount();
})

xit('show a form', () => {
  expect(wrapped2.find("form").length).toEqual(1)
})

xit('show 2 input buttons', () => {
  expect(wrapped.find("input").length).toEqual(1)
})

it('input area user can type in location', () => {
  wrapped2.find("textarea").simulate('change', {
    target: {value: "city name"}
  });

  wrapped2.update();
  // console.log(wrapped2.find('textarea').prop);
  // let propObj = wrapped2.find('textarea').prop;
  // console.log(propObj.value)
  expect(wrapped2.find('textarea').prop('value')).toEqual("city name");
  // props().value or props() to show the props object
})
