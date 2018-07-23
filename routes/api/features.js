const express = require('express');
const router = express.Router();

// Feature Model
const Feature = require('../../models/Feature');

router.get('/', (req, res) => {
    Feature
      .find()
      .sort({date: -1})
      .then(features => res.json(features))
});

router.post('/', (req, res) => {
  const newFeature = new Feature({
    name: req.body.name
  });
  newFeature
    .save()
    .then(feature => res.json(feature));
});

router.delete('/:id', (req, res) => {
  Feature
    .findById(req.params.id)
    .then(feature => feature.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json(err));
});

module.exports = router;