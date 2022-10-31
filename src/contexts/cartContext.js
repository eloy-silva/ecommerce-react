import React, { useState } from "react";
import { products } from "../data/productsDb";

const CartContext = React.createContext({});

export const CartProvider = (props) => {
  const productList = products;
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    const cartProduct = cartProducts.find((item) => item.id === product.id);

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      cartProducts.push({
        ...product,
        quantity: 1,
      });
    }

    setCartProducts([...cartProducts]);
  };

  const addCartProductQuantity = (product) => {
    const cartProduct = cartProducts.find((item) => item.id === product.id);

    cartProduct.quantity++;
    setCartProducts([...cartProducts]);
  };

  const deleteProductFromCart = (product) => {
    let updatedCart;

    if (product.quantity > 1) {
      updatedCart = cartProducts.map((item) => {
        if (item.id === product.id) {
          item.quantity--;
        }
        return item;
      });
    } else {
      updatedCart = cartProducts.filter((item) => item.id !== product.id);
    }

    setCartProducts(updatedCart);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        cartProducts,
        setCartProducts,
        addToCart,
        addCartProductQuantity,
        deleteProductFromCart,
        formatPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useProducts = () => React.useContext(CartContext);
