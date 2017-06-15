var express = require('express');

var articlesController = require('../controller/articlesController');

var router = new express.Router();

router.get('/saved', articlesController.index);

router.post('/saved', articlesController.create);

// router.patch('/quotes/:id', articlesController.update);

router.delete('/saved/:id', articlesController.destroy);

module.exports = router;