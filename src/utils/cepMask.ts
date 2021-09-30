const cepMask = (cep: string) => {
  let value = cep.replace(/\D/g, "");

  if (value.length >= 9) return "";

  if (value.length >= 6) {
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }

  return value;
};

export default cepMask;
