import React, { useState } from "react";
import {
  CartSection,
  CartIcon,
  CartContainer,
  CartProduct,
  CartProductInfo,
  CartProductBuy,
  BuyQuantity,
  CartTotal,
  Modal,
  EmptyCart,
} from "./style";
import { BsCart, BsPlus } from "react-icons/bs";
import { useProducts } from "../../contexts/cartContext";

export default function Cart() {
  const {
    cartProducts,
    addCartProductQuantity,
    deleteProductFromCart,
    formatPrice,
  } = useProducts();
  const [showModal, setShowModal] = useState(false);

  const modalCart = () => {
    setShowModal(!showModal);
  };

  const totalProduct = (product) => {
    return product.price * product.quantity;
  };

  const totalCart = () => {
    return cartProducts.reduce(
      (previous, current) => previous + current.price * current.quantity,
      0
    );
  };

  return (
    <CartSection>
      <CartIcon onClick={() => modalCart()}>
        <BsCart size={28} />{" "}
      </CartIcon>{" "}
      {showModal && (
        <CartContainer>
          {" "}
          {cartProducts.length ? (
            <Modal>
              {" "}
              {cartProducts.map((product) => (
                <CartProduct key={product.id}>
                  <CartProductInfo>
                    <img src={product.image} alt={product.name} />{" "}
                    <p> {product.name} </p>{" "}
                  </CartProductInfo>{" "}
                  <CartProductBuy>
                    <BuyQuantity>
                      <button onClick={() => addCartProductQuantity(product)}>
                        <BsPlus />
                      </button>{" "}
                      <p> {product.quantity} </p>{" "}
                      <button onClick={() => deleteProductFromCart(product)}>
                        {" "}
                        -{" "}
                      </button>{" "}
                    </BuyQuantity>{" "}
                    <p> {formatPrice(totalProduct(product))} </p>{" "}
                  </CartProductBuy>{" "}
                </CartProduct>
              ))}{" "}
              <CartTotal>
                <p> Total: {formatPrice(totalCart())} </p>{" "}
              </CartTotal>{" "}
            </Modal>
          ) : (
            <EmptyCart>
              <p> Carrinho vazio! </p>{" "}
            </EmptyCart>
          )}{" "}
        </CartContainer>
      )}{" "}
    </CartSection>
  );
}
