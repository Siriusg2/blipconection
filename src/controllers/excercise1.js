const excercise1Controller = (framework) => {
  // Eliminar espacios en blanco y convertir a mayúsculas
  framework = framework.replace(/\s/g, "").toUpperCase();

  // Definir la estructura del mensaje
  const blocks = {
    header: 2,
    properties: 2,
    length: 4,
    sequenceId: 4,
    checksum: 4,
    message: framework.length - 16,
  };

  // Parsear cada bloque del mensaje
  let parsedMessage = {};
  let startIndex = 0;
  for (const block in blocks) {
    const length = blocks[block];
    const endIndex = startIndex + length;
    parsedMessage[block] = framework.slice(startIndex, endIndex);
    startIndex = endIndex;
  }

  return parsedMessage;
};

module.exports = {
  excercise1Controller,
};
