function parseSignedInteger(bytes) {
  // Concatenar los bytes en orden little-endian
  const littleEndianHex = bytes.reverse().join("");

  // Convertir de hexadecimal a decimal
  const decimal = parseInt(littleEndianHex, 16);

  // Verificar el signo
  const signBit = 0x80; // Primer bit en el primer byte indica el signo
  const isNegative = decimal & signBit;

  // Aplicar el signo si es negativo
  const signedDecimal = isNegative ? -((~decimal + 1) & 0x7fffffff) : decimal;

  // Retornar el resultado dividido por 10 millones
  return signedDecimal / 10000000;
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
