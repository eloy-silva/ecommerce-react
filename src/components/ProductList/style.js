import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 15px 0;
`;

export const ProductCard = styled.div`
  flex-wrap: wrap;
  width: 400px;
  margin: 15px;
  background-color: #afafaf;
`;

export const ProductInfo = styled.div`
  text-align: center;
  margin: 7px;
  img {
    width: 200px;
    margin: 10px 0;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 130px;
    display: flex;
    font-size: 22px;
    margin-right: 5px;
  }
  button {
    padding: 7px;
    background-color: #afafaf;
  }
`;
