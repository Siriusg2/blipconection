function parseSignedInteger(bytes) {
  let value = 0;
  for (let i = 0; i < bytes.length; i++) {
    value = (value << 8) | parseInt(bytes[i], 16);
  }
  const signBit = 0x80000000;
  if (value & signBit) {
    value = -(0x100000000 - value);
  }
  return value;
}

function adjustPrecision(number) {
  const minValue = 0.5;
  const maxValue = 99.9;

  // Verificar si el número está dentro del rango
  if (number >= minValue && number <= maxValue) {
    return number; // El número ya está dentro del rango, no se requiere ajuste
  }

  // Dividir el número entre 10 hasta que esté dentro del rango
  while (number > maxValue) {
    number /= 10;
  }

  return number;
}

function parseHexToDecimal(hexArray) {
  let result = 0;
  for (let i = 0; i < hexArray.length; i++) {
    result = (result << 4) | parseInt(hexArray[i], 16);
  }
  return result;
}

module.exports = {
  parseHexToDecimal,
  adjustPrecision,
  parseSignedInteger,
};
