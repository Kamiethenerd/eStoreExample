var item = require('../models/item-data');
var express = require('express');
var router = express.Router();
var path = require('path');
var obj = item.CatalogEntryView[0];
var pI = obj.Offers[0].OfferPrice[0];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "eStore",
    headline:obj.title,
    primaryImg:obj.Images[0].PrimaryImage[0].image,
    price: pI.formattedPriceValue,
    qualifier: pI.priceQualifier,
    callOut: obj.callOutMsg,
    highlights: obj.ItemDescription[0].features
  });
});

// router.get('/', function(req, res, next){
//     console.log('loading data');
//     res.json({data: obj});
// });


module.exports = router;
