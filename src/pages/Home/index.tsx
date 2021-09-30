import React from "react";
import Search from "../../components/Search";

import { Container } from "./styles";

import imgSrc from "../../assets/viacep.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Search />
      <img src={imgSrc} alt="Viacep" />
    </Container>
  );
};

export default Home;
