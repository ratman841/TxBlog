const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const postsRepository = require("./PostsRepository");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.get("/getAllPosts", (req, res) => {
    res.send(postsRepository.getAllPosts());
});

app.get("/getPost", (req, res) => {
    res.send(postsRepository.getPost(req.query.index));
});

app.get("/getPostComments", (req, res) => {
    res.send(postsRepository.getPostComments(req.query.index));
});

app.post("/addComment", (req, res) => {
    postsRepository.addComment(req.query.index, req.body.author, req.body.text);
    res.sendStatus(200);
});

app.post("/updateComment", (req, res) => {
    postsRepository.updateComment(req.query.postIndex, req.query.commentIndex, req.body.author, req.body.text);
    res.sendStatus(200);
});

module.exports = app;
