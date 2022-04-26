require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/multimedia', require('./routes/multimedia'));
app.use('/api/restaurant', require('./routes/restaurant'));
app.use('/api/product', require('./routes/product'));
app.use('/api/category', require('./routes/category'));
app.use('/api/subcategories', require('./routes/subcategories'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log('Escuchando el puerto', PORT);
});
