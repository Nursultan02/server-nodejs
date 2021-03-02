const express = require('express');
const db = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8080;
const dbUrl =
  'mongodb+srv://user-n1:qwe123@cluster0.nvitu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

db.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  try {
    console.log('Connected to db!');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
});
