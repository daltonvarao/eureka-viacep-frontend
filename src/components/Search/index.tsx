import React, { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { AxiosError } from "axios";

import IAddress from "../../interfaces/Address";
import api from "../../services/api";
import cepMask from "../../utils/cepMask";
import Loader from "../Loader";
import Modal from "../Modal";
import { Button, Container, ErrorMessage, Input, Title } from "./styles";

const Search: React.FC = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [address, setAddress] = useState<IAddress | undefined>();
  const [error, setError] = useState<string>();

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = cepMask(ev.target.value);

    setCep(value);
  }

  async function handleButtonClick(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    if (!cep) return;

    setLoading(true);

    const unmaskedCep = cep.replace(/\D/g, "");

    try {
      const response = await api.get(`/adresses/${unmaskedCep}`);
      setAddress(response.data);
      setModalVisible(true);
      setLoading(false);
    } catch (err) {
      const error = err as AxiosError;

      resetStates();
      if (error.response?.data?.errors) {
        setError(error.response?.data?.errors[0]?.message);
      }
    }
  }

  function resetStates() {
    setModalVisible(false);
    setLoading(false);
    setCep("");
    setAddress(undefined);
    setError("");
  }

  return (
    <>
      <Modal visible={modalVisible} data={address} onClose={resetStates} />
      <Container>
        <form>
          <Title>Viacep</Title>

          <Input
            type="text"
            placeholder="Digite seu cep"
            value={cep}
            onChange={handleInputChange}
            name="cep"
          />

          <Button disabled={cep.length < 9} onClick={handleButtonClick}>
            {loading ? <Loader /> : "Buscar"}
          </Button>

          {error && (
            <ErrorMessage>
              <FiAlertTriangle size={28} />
              {error}
            </ErrorMessage>
          )}
        </form>
      </Container>
    </>
  );
};

export default Search;
