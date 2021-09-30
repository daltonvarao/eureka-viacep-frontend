import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from ".";
import api from "../../services/api";
import AxiosMockAdapter from "axios-mock-adapter";

const axiosMockAdaper = new AxiosMockAdapter(api);

const expectedResponse = {
  cep: "68030340",
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

axiosMockAdaper.onGet("/adresses/68030340").reply(200, expectedResponse);
axiosMockAdaper
  .onGet("/adresses/68030341")
  .reply(404, { errors: [{ message: "Cep não encontrado" }] });

describe("Search component", () => {
  beforeEach(() => {
    render(<Search />);
  });

  it("should the component contains a title", () => {
    const title = screen.getByRole("heading", { name: "Viacep" });

    expect(title).toBeInTheDocument();
  });

  it("should the component contains a cep input", () => {
    const input = screen.getByPlaceholderText("Digite seu cep");

    expect(input).toBeInTheDocument();
  });

  it("should the input change apply cep mask on current typed value", () => {
    const input = screen.getByPlaceholderText(
      "Digite seu cep"
    ) as HTMLInputElement;

    userEvent.type(input, "68030340");

    expect(input.value).toBe("68030-340");
  });

  it("should the component contains a disabled button if input is empty", () => {
    const button = screen.getByRole("button", { name: "Buscar" });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should click on button shows modal if cep is valid", async () => {
    const input = screen.getByPlaceholderText(
      "Digite seu cep"
    ) as HTMLInputElement;

    userEvent.type(input, "68030340");

    const button = screen.getByRole("button", { name: "Buscar" });

    userEvent.click(button);

    await waitFor(() => {
      const modalTitle = screen.getByText(/Cep 68030340/);
      expect(modalTitle).toBeInTheDocument();
    });
  });

  it("should click on button not shows modal if cep is invalid", async () => {
    const input = screen.getByPlaceholderText(
      "Digite seu cep"
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: "Buscar" });

    userEvent.type(input, "68030341");
    userEvent.click(button);

    await waitFor(() => {
      const modalTitle = screen.queryByRole("heading", {
        name: /Cep 68030341/,
      });

      expect(modalTitle).not.toBeInTheDocument();
    });

    const notFoundMsg = screen.getByText(/Cep não encontrado/);
    expect(notFoundMsg).toBeInTheDocument();
  });
});
