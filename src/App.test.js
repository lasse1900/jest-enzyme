import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() })

import App from './App';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
});

test('renders increment button', () => {

})

test('renders counter display', () => {
  
})

test('test counter starts at 0', () => {
  
})

test('clicking butoon increments counter display', () => {
  
})
