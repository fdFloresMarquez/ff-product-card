import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Product Image', () => {
    test('should render without crashing with a custom image', () => {
      const wrapper = renderer.create(
        <ProductCard product={product2}>{() => <ProductImage img='https://hola.com' />}</ProductCard>
      );
  
      expect( wrapper.toJSON() ).toMatchSnapshot();
    });
    
    test('should render without crashing productImage', () => {
      const wrapper = renderer.create(
        <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
      );
  
      expect( wrapper.toJSON() ).toMatchSnapshot();
    });
  });