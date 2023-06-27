const server = require("./src/app");
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
});
