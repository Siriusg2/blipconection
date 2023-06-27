# Documentación del Servidor

## Instrucciones

1. Levanta el servidor con el comando `npm run dev`. Esto ejecuta la dependencia nodemon en la instancia de desarrollo.

## Endpoints

El servidor solamente tiene dos endpoints, a los que se puede hacer peticiones mediante el metodo HTTP POST enviando la siguiente data en el siguiente formato:

### Endpoint 1

- URL: `POST http://localhost:3000/excercise1`
- Body:{"data": "AB1051009A9002000110013836393634303035383437303838340924E8ADFA62010082000902000100001E6AFA621620968145EDBEA0BED9000000009910B50071A30E000B0924FA15056310008A1109020002000000000000" }

### Endpoint 2

- URL: `POST http://localhost:3000/excercise2`
- Body: Payload: [
  '96', '81', '45', 'ED',
  'BE', 'A0', 'BE', 'D9',
  '00', '00', '00', '00',
  '99', '10', 'B5', '00',
  '71', 'A3', '0E', '00',
  '0B'
  ],

### RESPUESTAS DEL servidor:

se puede hacer pruebas de los endpoints mediante POSTMAN o INSOMNIA, pero el servidor tambien envia a la consola los datos solicitados

### Endpoint 1

{
"header": "AB",
"properties": "10",
"length": "5100",
"sequenceId": "9A90",
"checksum": "0200",
"message": "0110013836393634303035383437303838340924E8ADFA62010082000902000100001E6AFA621620968145EDBEA0BED9000000009910B50071A30E000B0924FA15056310008A1109020002000000000000"
}

### Endpoint 2

{
"lat": -606.4880147,
"lng": -539.1728935,
"speed": 0,
"direction": 0,
"altitude": 2448,
"precision": 28.96,
"mileage": 5048,
"satellites": 11
}

NOTA: Es importante respetar la estructura de los datos enviados, debido a que el servidor posee middlewares que verifican la estructura y el tipo de datos antes de redirigir la request al controlador y ejecutar la lógica necesaria para la respuesta que se quiere.
