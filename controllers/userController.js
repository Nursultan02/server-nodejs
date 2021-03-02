const User = require('../models/userModel');
const bcrypt = require('bcrypt');

class userController {
  async registration(req, res) {
    const { userName, password } = req.body;
    const candidate = await User.findOne({ userName });

    if (candidate === null) {
      bcrypt.hash(password, 7, (err, hash) => {
        const user = new User({
          userName,
          password: hash,
        });
        user.save();
        res.send(user);
      });
    } else {
      res.status(401).json({
        message: 'Такой пользователь уже существует!',
      });
    }
  }
  async login(req, res) {
    const { userName, password } = req.body;
    const candidate = await User.findOne({ userName });
    if (candidate === null) {
      res.status(400).json({
        message: 'Пользователь не найден!',
      });
    } else {
      bcrypt.compare(password, candidate.password, (err, result) => {
        if (result) {
          res.send(`Авторизация прошла успешна! Добро пожаловать ${userName}`);
        } else {
          res.status(401).json({ message: 'Пароль неверный!' });
        }
      });
    }
  }
}

module.exports = new userController();
