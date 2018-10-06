var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {

	var elasticsearch=require('elasticsearch');

	var client = new elasticsearch.Client( {  
	  hosts: [
	    'localhost:9200'
	  ]
	});

	var elasticClient = new elasticsearch.Client({
	  host : 'localhost:9200'
	});

	var qq = {
		  "query": {
		        "query_string": {
		            "query": "Cisco AND Catalyst AND 9300"
		        }
		    }
		}

	elasticClient.search({
    index:"hack",
    type: "ciscodata",
    body: JSON.stringify(qq)
  	}).then(function(response){
  		console.log("YAYAYAYYA");
	    console.log("got response"+response);
  });

});

module.exports = router;