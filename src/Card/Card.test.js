import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  });

  it('should match all the data being passed', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it.skip('should delete a reservation when cancel is clicked', () => {
    wrapper.instance().cancelReservation = jest.fn();
    // wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().cancelReservation).toHaveBeenCalled()
  });

});