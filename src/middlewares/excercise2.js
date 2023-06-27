const excercise2Middelware = (req, res, next) => {
  const { data } = req.body;

  let notIsString = 0;

  for (let byte in data) {
    if (typeof byte !== "string") notIsString++;
  }
  if (!Array.isArray(data)) throw new Error("los datos deben ser un Array");
  if (notIsString) throw new Error("los datos deben ser un Array de strings");

  if (!data.length) throw new Error("El array debe contener informacion");
  if (data.length > 21 || data.length < 21)
    throw new Error(" el Array con la trama debe contener  21 Bytes");
  next();
};

module.exports = excercise2Middelware;
