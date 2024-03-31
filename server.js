const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
