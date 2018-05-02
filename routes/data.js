var item = require('../models/item-data');
var express = require('express');
var router = express.Router();
var path = require('path');
//var obj = item.CatalogEntryView[0];

/* GET info. */
// router.get('/:id', function(req, res, next) {
//   res.json({object:item.CatalogEntryView[req.params.id]});
// });

/* GET info. */
router.get('/data', function(req, res, next){
    console.log('loading data');
    res.send(item.CatalogEntryView[0]);
});

module.exports = router;
