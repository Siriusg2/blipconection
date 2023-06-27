const excercise1Middelware = (req, res, next) => {
  const { data } = req.body;

  if (typeof data !== "string")
    throw new Error("los datos deben ser de tipo String");
  if (data.length < 178) throw new Error(" la trama de datos esta incompleta");
  next();
};

module.exports = excercise1Middelware;
