import cepMask from "./cepMask";

it("should cepMask return masked string on #####-### format", () => {
  const cep = "68030340";

  const maskedCep = cepMask(cep);

  expect(maskedCep).toEqual("68030-340");
});

it("should cepMask return undefined if cep length greater than 9 chars", () => {
  const cep = "680303400";

  const maskedCep = cepMask(cep);

  expect(maskedCep).toEqual("");
});
