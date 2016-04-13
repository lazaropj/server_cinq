var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rest/people', function(req, res, next) {	
    var name = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
    var surname = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];
    var finalList = [];
    
    for(i=0; i<10; i++) {
        var randomName = Math.floor((Math.random() * name.length) + 1);
        var randomSurname = Math.floor((Math.random() * surname.length) + 1);
        var json = {"id" : i, "name" : name[randomName] + " " + surname[randomSurname], "disclosableInfo" : "bla bla bla"};
        finalList.push(json);
    }
    res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.send(finalList);
});

module.exports = router;
