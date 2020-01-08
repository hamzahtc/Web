const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  nom: { type: String, required: true },
  vote: { type: Number, required: true },
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;