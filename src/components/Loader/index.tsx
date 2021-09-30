import React from "react";

import { Container } from "./styles";

const Loader: React.FC = () => {
  return <Container role="progressbar" data-testid="loader" />;
};

export default Loader;
