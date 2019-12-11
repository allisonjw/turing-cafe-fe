import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    const mockSubmitReservation = jest.fn()
    wrapper = shallow(<Form submitReservation={mockSubmitReservation}/>)
  });

  it('should match all the data being passed', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should update state on handleChange', () => {
      const mockEvent = {target: {name: 'name', value: 'Allison'}}
      const expected = 'Allison';

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual(expected)
  })

});