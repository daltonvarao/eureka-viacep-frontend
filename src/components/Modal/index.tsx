import React from "react";
import IAddress from "../../interfaces/Address";

import {
  Container,
  ModalContent,
  ModalBody,
  ModalHeader,
  ReadOnlyInput,
  InputGroup,
} from "./styles";

interface ModalProps {
  visible: boolean;
  data?: IAddress;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose, visible }) => {
  if (!data) return null;

  return (
    <Container className={visible ? "show" : ""}>
      <ModalContent className={visible ? "show" : ""}>
        <ModalHeader>
          <h2>Cep {data.cep}</h2>
          <button onClick={onClose}>&times;</button>
        </ModalHeader>
        <ModalBody>
          <InputGroup>
            <label>Bairro</label>
            <ReadOnlyInput
              type="text"
              placeholder="Bairro"
              defaultValue={data.bairro}
            />
          </InputGroup>
          <InputGroup>
            <label>Cep</label>
            <ReadOnlyInput
              type="text"
              placeholder="Cep"
              defaultValue={data.cep}
            />
          </InputGroup>
          <InputGroup>
            <label>Complemento</label>
            <ReadOnlyInput
              type="text"
              placeholder="Complemento"
              defaultValue={data.complemento}
            />
          </InputGroup>
          <InputGroup>
            <label>DDD</label>
            <ReadOnlyInput
              type="text"
              placeholder="DDD"
              defaultValue={data.ddd}
            />
          </InputGroup>
          <InputGroup>
            <label>GIA</label>
            <ReadOnlyInput
              type="text"
              placeholder="GIA"
              defaultValue={data.gia}
            />
          </InputGroup>
          <InputGroup>
            <label>Localidade</label>
            <ReadOnlyInput
              type="text"
              placeholder="Localidade"
              defaultValue={data.localidade}
            />
          </InputGroup>
          <InputGroup>
            <label>Logradouro</label>
            <ReadOnlyInput
              type="text"
              placeholder="Logradouro"
              defaultValue={data.logradouro}
            />
          </InputGroup>
          <InputGroup>
            <label>SIAFI</label>
            <ReadOnlyInput
              type="text"
              placeholder="SIAFI"
              defaultValue={data.siafi}
            />
          </InputGroup>
          <InputGroup>
            <label>UF</label>
            <ReadOnlyInput
              type="text"
              placeholder="UF"
              defaultValue={data.uf}
            />
          </InputGroup>
        </ModalBody>
      </ModalContent>
    </Container>
  );
};

export default Modal;
