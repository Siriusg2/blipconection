function parseSignedInteger(bytes) {
  let result = "";
  for (let i = bytes.length - 1; i >= 0; i--) {
    result += bytes[i];
  }
  const value = parseInt(result, 16);
  const signBit = 1 << (bytes.length * 8 - 1);
  return value & signBit ? -(value ^ 0xffffffff) - 1 : value;
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
function adjustDirection(number) {
  const minValue = 0;
  const maxValue = 359;

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

function toDecimalLittleEndian(bytes) {
  let result = "";
  for (let i = bytes.length - 1; i >= 0; i--) {
    result += bytes[i];
  }
  return parseInt(result, 16);
}

module.exports = {
  adjustPrecision,
  parseSignedInteger,
  toDecimalLittleEndian,
  adjustDirection,
};
