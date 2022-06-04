const express = require('express');
const router = express.Router();
const Census = require('../model/census');


// use the request query to get the state name
router.get('/census',function(req,res,next){
    Census.find({ "city": { "$regex": " " + req.query.name, "$options": "i" } }).then(function(census){
       console.log(census);
       res.send(census);
    }
    
    ).catch(next);
        
    // Census.aggregate([{ $sample: { size: 1 } }]).then(function(census){
    //     console.log(census)
    //     res.send(census);
});

module.exports = router;

