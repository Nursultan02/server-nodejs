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
  login(req, res) {}
}

module.exports = new userController();
