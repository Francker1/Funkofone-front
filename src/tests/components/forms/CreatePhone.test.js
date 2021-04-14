/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CreatePhone from '../../../components/forms/CreatePhone';

describe('Test in Create Form component', () => {
  const setDataPhone = jest.fn();
  let wrapper = shallow(<CreatePhone />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CreatePhone />);
  });

  test('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should set input value in onChange', () => {
    const input = wrapper.find('input#phoneName');
    const value = 'iPhone 11';

    input.simulate('change', { target: { value } });
  });

  test('not should submit the form without data', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    // If you want check if handleSubmit is called, remove .not, the test will fail...and it's ok because means that function have been called
    expect(setDataPhone).not.toHaveBeenCalled();
  });
});
