const {
  parseSignedInteger,
  adjustPrecision,
  toDecimalLittleEndian,
  adjustDirection,
} = require("./utils/utilFunctions");

const excercise2Controller = (gpsTrama) => {
  const latBytes = gpsTrama.slice(0, 4);
  const lngBytes = gpsTrama.slice(4, 8);
  const speedBytes = gpsTrama.slice(8, 10);
  const directionBytes = gpsTrama.slice(10, 12);
  const altitudeBytes = gpsTrama.slice(12, 14);
  const precisionBytes = gpsTrama.slice(14, 16);

  const mileageBytes = gpsTrama.slice(16, 20);
  const satellitesByte = gpsTrama[20];

  const lat = parseSignedInteger(latBytes) / 10000000;
  const lng = parseSignedInteger(lngBytes) / 10000000;
  const speed = toDecimalLittleEndian(speedBytes);
  const direction = adjustDirection(toDecimalLittleEndian(directionBytes));
  const precision = adjustPrecision(toDecimalLittleEndian(precisionBytes));
  const altitude = toDecimalLittleEndian(altitudeBytes);
  const mileage = toDecimalLittleEndian(mileageBytes);
  const satellites = parseInt(satellitesByte, 16);

  const gpsData = {
    lat,
    lng,
    speed,
    direction,
    altitude,
    precision,
    mileage,
    satellites,
  };
  return gpsData;
};

module.exports = excercise2Controller;
