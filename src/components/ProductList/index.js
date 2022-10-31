import React from 'react'
import {
  ProductListContainer,
  ProductCard,
  ProductInfo,
  ProductPrice
} from './style';

import { BsCartPlus } from 'react-icons/bs';
import { useProducts } from '../../contexts/cartContext';



function ProductList() {
  const { productList, addToCart, formatPrice } = useProducts();

  const addFromProductListToCart = (product) => {
    addToCart(product);
  }

  return (
    <ProductListContainer>
      {
        productList?.map((product) =>
          <ProductCard key={product.id}>
            <ProductInfo>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.details}</p>
            </ProductInfo>
            <ProductPrice>
              <h3>{formatPrice(product.price)}</h3>
              <button onClick={() => addFromProductListToCart(product)}><BsCartPlus size={24} /></button>
            </ProductPrice>
          </ProductCard>
        )
      }
     
      
    </ProductListContainer>

   
  )
}

export default ProductList