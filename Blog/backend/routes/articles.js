const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});
 
router.route('/:id').get((req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const vote = Number(req.body.vote);
  
    const article = new Article({
      nom,
      vote
    });
  
    article.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:id').put((req, res) => {
  Article.findById(req.params.id)
    .then(artilce => {
        artilce.nom = req.body.nom;
        artilce.vote = Number(req.body.vote);

      artilce.save()
        .then(() => res.json('Article updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;