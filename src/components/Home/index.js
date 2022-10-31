import React from "react";
import Cart from "../Cart";
import { Container, Title } from "./style";
import { BsXOctagonFill } from "react-icons/bs";

function Home() {
  return (
    <Container>
      <Title>
        VINIL <BsXOctagonFill /> SHOP
      </Title>
      <Cart />
    </Container>
  );
}

export default Home;
