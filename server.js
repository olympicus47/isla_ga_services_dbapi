require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/locatii', require('./controlere/locatiiController'));
console.log('loaded locatii routes');
app.use('/produse', require('./controlere/produseController'));
console.log('loaded produse routes');
app.use('/inventar', require('./controlere/inventarController'));
console.log('loaded inventar routes');

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));