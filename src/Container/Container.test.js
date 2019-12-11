import React from 'react';
import {shallow} from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />)
  });

  it.skip('should match all the data being passed', () => {
    expect(wrapper).toMatchSnapshot()
  })

});