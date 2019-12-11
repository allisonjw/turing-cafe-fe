import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match all the data being passed', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update state when data is passed in', () => {
    let mockData = {
      id: 18907224,
      name: "Allison",
      date: "12/5",
      time: "7:00",
      number: 6
    }
    const expected = [mockData];
    expect(wrapper.state('reservations')).toEqual([])
    wrapper.instance().addReservation(mockData);
    expect(wrapper.state('reservations')).toEqual(expected)
  });

});
