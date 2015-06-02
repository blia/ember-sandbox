module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  var data = [
    {
      id: 1,
      title: '1st post',
      body: 'Post body',
      comments: [1]
    },
    {
      id: 2,
      title: '2nd post',
      body: 'Post great body',
      comments: [2]
    }
  ]
  var comments = [
    {
      id: 1,
      message: '1st post comment'
    },
    {
      id: 2,
      message: '2nd post comment'
    }
  ]
  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': data,
      'comments': comments
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'post': data[req.params.id - 1]
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
