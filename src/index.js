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

app.use('/api/menu', require('./routes/menu'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log('Escuchando el puerto', PORT);
});
