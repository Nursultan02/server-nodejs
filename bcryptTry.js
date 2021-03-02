const bcrypt = require('bcrypt');
const userController = require('./controllers/userController');

app.post('/user', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    res.send(hash);
  });
  bcrypt.compare(
    req.body.password,
    '$2b$10$vp8ZOp0ZsIH409NcSiLoq.VAYQyt55FCxkRb2cSS9YP54qv8Vtky6',
    (err, result) => {
      if (result) {
        res.send('Password is true, come in!');
      } else {
        res.send('Password is incorrect!');
      }
    }
  );
});
