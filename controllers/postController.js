const Post = require('../models/postModel');
const db = require('mongoose');
db.set('useFindAndModify', false);

class postController {
  async getPosts(req, res) {
    const posts = await Post.find();
    res.send(posts);
  }
  createPost(req, res) {
    const { title, description } = req.body;
    const post = new Post({ title, description });
    post.save();
    res.send(post);
  }
  async updatePostById(req, res) {
    const id = req.params.id;
    console.log(id);
    const { title, description } = req.body;
    await Post.findByIdAndUpdate({ _id: id }, { title, description });
  }
  async deletePost(req, res) {
    const id = req.params.id;
    console.log(id);
    await Post.findByIdAndRemove({ _id: id });
    res.send(Post.find);
  }
}

module.exports = new postController();
