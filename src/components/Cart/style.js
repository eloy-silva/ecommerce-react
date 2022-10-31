import styled from "styled-components";

export const CartSection = styled.div`
  float: right;
  margin-right: 50px;
`;

export const CartIcon = styled.div`
  position: fixed;
  background-color: #afafaf;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  position: fixed;
  right: 5px;
  margin-top: 45px;
  padding: 15px;
  align-items: center;
  flex-wrap: wrap;
  background-color: #e7e7e7;
`;

export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  img {
    width: 50px;
  }
`;

export const CartProductInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    max-width: 100px;
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const CartProductBuy = styled.div``;
export const Modal = styled.div``;

export const BuyQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  p {
    margin: 0 3px;
  }
  button {
    font-size: 16px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: #e7e7e7;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  margin-top: 10px;

  p {
    text-align: center;
    margin-top: 15px;
    font-size: 18px;
  }
`;

export const EmptyCart = styled.div`
  p {
    font-size: 20px;
    font-weight: 600;
  }
`;
