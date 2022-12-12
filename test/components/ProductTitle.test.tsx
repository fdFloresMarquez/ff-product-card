import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard, { ProductTitle } from '../../src/components';
import { product } from '../data/products';

describe('Product Title', () => {
  test('should render without crashing with the Product Name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();
  });
});
