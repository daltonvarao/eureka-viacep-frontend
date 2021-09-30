import { render, screen, fireEvent } from "@testing-library/react";
import Modal from ".";

describe("Search component", () => {
  const data = {
    cep: "68030-340",
    logradouro: "Avenida Violeta",
    complemento: "",
    bairro: "Jardim Santarém",
    localidade: "Santarém",
    uf: "PA",
    ibge: "1506807",
    gia: "",
    ddd: "93",
    siafi: "0535",
  };

  const state = { visible: true };
  const onClose = jest.fn();

  beforeEach(() => {
    render(<Modal data={data} onClose={onClose} visible={state.visible} />);
  });

  it("should the component contains a title", () => {
    const title = screen.getByRole("heading", {
      name: "Resultado para 68030-340",
    });

    expect(title).toBeInTheDocument();
  });

  it("should the component contains a cep input", () => {
    const input = screen.getByDisplayValue("68030-340");

    expect(input).toBeInTheDocument();
  });

  it("should the component contains a logradouro input", () => {
    const input = screen.getByDisplayValue("Avenida Violeta");

    expect(input).toBeInTheDocument();
  });

  it("should the component contains a close button", () => {
    const button = screen.getByRole("button", { name: "×" });

    expect(button).toBeInTheDocument();
  });

  it("should click on button fires onclose function", () => {
    const button = screen.getByRole("button", { name: "×" });

    fireEvent.click(button);
    expect(onClose).toBeCalled();
  });
});
