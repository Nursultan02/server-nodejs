class postController {
  getPosts(req, res) {
    res.send('it works! maaan');
  }
}

module.exports = new postController();
