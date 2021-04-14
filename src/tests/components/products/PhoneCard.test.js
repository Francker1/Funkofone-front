import React from 'react';
import { shallow } from 'enzyme';
import PhoneCard from '../../../components/products/PhoneCard';

describe('Tests in PhoneCard component', () => {
  const data = {
    model: 'ASD',
    name: 'iPhone 11',
    _id: '01',
    manufacturer: 'Apple',
    color: 'red',
    price: 10,
    image: 'http://example.img',
  };

  const wrapper = shallow(
    <PhoneCard
      name={data.name}
      model={data.model}
      _id={data._id}
      manufacturer={data.manufacturer}
      color={data.color}
      price={data.price}
      image={data.image}
    />,
  );

  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render <h4> tag with name phone', () => {
    const h4 = wrapper.find('h4');

    expect(h4.text().trim()).toBe(data.name);
  });

  test('should have an image with src and alt props', () => {
    const img = wrapper.find('CardImg');

    expect(img.props().src).toBe(data.image);
    expect(img.props().alt).toBe(data.name);
  });

  test('tag <small> should have class text-muted', () => {
    const small = wrapper.find('small');
    const className = small.prop('className');

    expect(className.includes('text-muted')).not.toBe(false);
  });
});
